import React from "react";
import { BsBank } from "react-icons/bs";
import Button from "@/common/components/Button";
import { FaRegCreditCard, FaPaypal } from "react-icons/fa";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface ITopupOptions {
  onBankTrfClick: () => void;
  onPaypalClick: (type: string) => void;
}

const TopupOptions = (props: ITopupOptions) => {
  const { onBankTrfClick, onPaypalClick } = props;
  return (
    <>
      <div className="text-center text-lg font-semibold my-4">Topup using</div>
      <Button
        type="button"
        wrapperClassName="w-full bg-blue-900 text-white p-3 mb-2 rounded"
        buttonClassName="w-full h-full gap-2 flex items-center justify-center"
        onClick={onBankTrfClick}
      >
        <BsBank />
        <span>Bank Transfer (Indonesia)</span>
      </Button>
      <Button
        type="button"
        wrapperClassName="w-full bg-yellow-400 text-blue-900 p-3 mb-2 rounded"
        buttonClassName="w-full h-full gap-2 flex items-center justify-center"
        onClick={() => {
          sendFirebaseEvent("topup_paypal", {});
          onPaypalClick("paypal");
        }}
      >
        <FaPaypal className="text-xl" />
        <span>PayPal (Other Countries)</span>
      </Button>
      <Button
        type="button"
        wrapperClassName="w-full bg-gray-700 text-white p-3 mb-2 rounded"
        buttonClassName="w-full h-full gap-2 flex items-center justify-center"
        onClick={() => {
          sendFirebaseEvent("topup_card", {});
          onPaypalClick("card");
        }}
      >
        <FaRegCreditCard className="text-xl" />
        <span>Credit or Debit Card</span>
      </Button>
    </>
  );
};

export default TopupOptions;
