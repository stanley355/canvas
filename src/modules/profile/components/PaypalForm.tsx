import React, { useState } from "react";
import Select from "react-select";
import { FaChevronCircleLeft, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";
import { createTopup } from "../lib/createTopup";
import { DOKU_VA_LIST } from "../lib/constant";
import Button from "@/common/components/Button";
import { createDokuVA } from "../lib/createDokuVA";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import PaypalBtn from "./PaypalBtn";

interface IPaypalForm {
  type: "paypal" | "card";
  paypalCredentials: any;
  onBackClick: () => void;
}

const PaypalForm = (props: IPaypalForm) => {
  const { type, paypalCredentials, onBackClick } = props;
  const [hasSubmit, setHasSubmit] = useState(false);

  return (
    <div className="mt-8">
      <div className="font-semibold mb-2 text-xl">
        How much would you like to topup?
      </div>
      <div className="my-2">
        * 1 USD will be converted to Rp 14.000
      </div>
      <div className="my-2">
        * 1 SGD will be converted to Rp 11.000
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full mb-4">
        <Select
          options={[{ label: "USD", value: "USD" }, { label: "SGD", value: "SGD" }]}
          placeholder="Currency (Default: USD)"
          className="text-black border border-gray-500 rounded mb-4"
          name="payment_method"
          isDisabled={hasSubmit}
          onChange={(option) => {
          }}
        />
        <div className="mb-4">
          <label htmlFor="amount">
            <input
              type="number"
              name="amount"
              id="amount_input"
              placeholder="Topup Amount (Default $1.00)"
              className="text-black p-2 w-full rounded border border-gray-500"
              disabled={hasSubmit}
            />
          </label>
        </div>
        <div>*Click this {type} button to continue</div>
        <PaypalBtn type={type} paypalCredentials={paypalCredentials} />
      </form>

      <Button type="button" wrapperClassName="w-fit border px-2 py-1 border-gray-500 rounded mt-2" buttonClassName="w-full h-full flex items-center gap-2" onClick={onBackClick} >
        <FaChevronCircleLeft />
        <span>Back</span>
      </Button>
    </div>
  );
};

export default PaypalForm;
