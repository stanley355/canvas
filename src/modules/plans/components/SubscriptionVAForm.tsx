import React, { useState } from "react";
import Select from "react-select";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import Button from "@/common/components/Button";
import { createTopup } from "../lib/createTopup";
import { DOKU_VA_LIST } from "../lib/constant";
import { createDokuVA } from "../lib/createDokuVA";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { createSubscription } from "../lib/createSubscription";

interface ISubscriptionVAForm {
  duration: string;
  amount: number;
  dispatchVAinfo: (info: any) => void;
}

const SubscriptionVAForm = (props: ISubscriptionVAForm) => {
  const { duration, amount, dispatchVAinfo } = props;
  const [vaBank, setVaBank] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmit(true);

    const target = e.target as any;
    const paymentMethod = target.payment_method.value;
    if (!paymentMethod) {
      setHasSubmit(false);
      toast.error("Payment method is required!");
      return;
    }

    const token: any = Cookies.get("token");
    const user: any = decode(token);

    sendFirebaseEvent("subscription_va", {});
    const topup = await createSubscription(user.id, Number(amount), duration);
    if (topup?.id) {
      const dokuVAPayload = {
        dokuPath: paymentMethod,
        topupID: topup.id,
        amount: Number(amount),
        user,
      };

      const dokuVA = await createDokuVA(dokuVAPayload);
      if (dokuVA?.virtual_account_info?.virtual_account_number) {
        const vaInfo = dokuVA.virtual_account_info;
        vaInfo.bank_name = vaBank;
        vaInfo.amount = amount;
        dispatchVAinfo(vaInfo);
        setHasSubmit(false);
        return;
      }

      toast.error("Fail to create VA, please try again");
      setHasSubmit(false);
      return;
    }

    setHasSubmit(false);
    toast.error("Fail to create Subscription, please try again");
    return;
  };

  return (
    <div className="mt-8">
      <div className="font-semibold mb-2 text-xl">Topup Via</div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <Select
          options={DOKU_VA_LIST}
          placeholder="Payment Method (Virtual Account)"
          className="text-black border border-blue-900 rounded"
          name="payment_method"
          isDisabled={hasSubmit}
          onChange={(option) => {
            setVaBank(String(option?.label));
          }}
        />
        <button
          type="submit"
          disabled={hasSubmit}
          className="w-full text-center mt-4 p-2 bg-blue-900 text-white font-semibold rounded"
        >
          {hasSubmit ? <FaSpinner className="mx-auto animate-spin" /> : "Topup"}
        </button>
      </form>
      <div>
        *If Balance is not updated after payment, please wait for 2 minutes
        delay.
      </div>
    </div>
  );
};

export default SubscriptionVAForm;
