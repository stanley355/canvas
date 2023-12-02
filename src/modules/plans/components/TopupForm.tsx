import React, { useState } from "react";
import Select from "react-select";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import { createTopup } from "../lib/createTopup";
import { DOKU_VA_LIST } from "../lib/constant";
import { createDokuVA } from "../lib/createDokuVA";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface ITopupForm {
  dispatchVAinfo: (info: any) => void;
}

const TopupForm = (props: ITopupForm) => {
  const { dispatchVAinfo } = props;
  const [vaBank, setVaBank] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmit(true);

    const target = e.target as any;
    const amount = target.amount.value;
    const paymentMethod = target.payment_method.value;
    if (!amount || !paymentMethod) {
      setHasSubmit(false);
      toast.error("Topup amount and bank is required!");
      return;
    }

    if (amount < 10000) {
      setHasSubmit(false);
      toast.error("Minimum topup amount is Rp10.000!");
      return;
    }

    const token: any = Cookies.get("token");
    const user: any = decode(token);

    sendFirebaseEvent("topup_va", {});
    const topup = await createTopup(user.id, Number(amount));
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

      toast.error("Fail to create VAerror, please try again");
      setHasSubmit(false);
      return;
    }

    setHasSubmit(false);
    toast.error("Fail to create Topup, please try again");
    return;
  };

  return (
    <div className="mt-4">
      <div className="font-semibold mb-2 text-xl">
        How much would you like to topup?
      </div>
      <form onSubmit={handleSubmit} className="w-full mb-4">
        <div className="mb-4">
          <label htmlFor="amount">
            <input
              type="number"
              name="amount"
              id="amount_input"
              placeholder="Rp ..."
              className="text-black p-2 w-full rounded border border-blue-900 focus:outline-none"
              disabled={hasSubmit}
            />
          </label>
        </div>
        <Select
          options={DOKU_VA_LIST}
          placeholder="Payment Method (Virtual Account)"
          className="text-black border border-blue-900 rounded mb-4"
          name="payment_method"
          isDisabled={hasSubmit}
          onChange={(option) => {
            setVaBank(String(option?.label));
          }}
        />
        <button
          type="submit"
          disabled={hasSubmit}
          className="w-full h-full text-center bg-blue-900 text-white font-bold rounded-md p-2"
        >
          {hasSubmit ? <FaSpinner className="mx-auto animate-spin" /> : "Topup"}
        </button>
      </form>
      <div>
        * If Balance is not updated after payment, please wait for 2 minute
        delay.
      </div>
    </div>
  );
};

export default TopupForm;
