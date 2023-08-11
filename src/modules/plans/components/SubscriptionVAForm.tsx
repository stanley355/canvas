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
    console.log(111, topup);
    if (topup?.id) {
      const dokuVAPayload = {
        dokuPath: paymentMethod,
        topupID: topup.id,
        amount: Number(amount),
        user,
      };

      const dokuVA = await createDokuVA(dokuVAPayload);
      console.log(222, dokuVA);
      if (dokuVA?.virtual_account_info?.virtual_account_number) {
        const vaInfo = dokuVA.virtual_account_info;
        vaInfo.bank_name = vaBank;
        vaInfo.amount = amount;
        dispatchVAinfo(vaInfo);
        setHasSubmit(false);
        return;
      }

      toast.error("Something went wrong, please try again");
      setHasSubmit(false);
      return;
    }

    setHasSubmit(false);
    toast.error("Something went wrong, please try again");
    return;
  };

  return (
    <div className="mt-8">
      <div className="font-semibold mb-2 text-xl">
        Topup Via
      </div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <Select
          options={DOKU_VA_LIST}
          placeholder="Payment Method (Virtual Account)"
          className="text-black border border-gray-500 rounded"
          name="payment_method"
          isDisabled={hasSubmit}
          onChange={(option) => {
            setVaBank(String(option?.label));
          }}
        />
        <Button
          type="submit"
          wrapperClassName="w-full text-center mt-4 p-2 bg-blue-900 text-white font-semibold rounded"
          buttonClassName="w-full h-full"
          disabled={hasSubmit}
        >
          {hasSubmit ? <FaSpinner className="mx-auto animate-spin" /> : "Topup"}
        </Button>
      </form>
      <div>
        * After Topup: If Balance is not updated, please wait for 5 minutes
        delay.
      </div>
    </div>
  );
};

export default SubscriptionVAForm;
