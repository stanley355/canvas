import React, { useState } from "react";
import Select from "react-select";
import { FaChevronCircleLeft } from "react-icons/fa";

import Button from "@/common/components/Button";
import PaypalBtn from "./PaypalBtn";

interface IPaypalForm {
  type: string;
  paypalCredentials: any;
  onBackClick: () => void;
}

const PaypalForm = (props: IPaypalForm) => {
  const { type, paypalCredentials, onBackClick } = props;
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(1);

  return (
    <div className="mt-8">
      <div className="font-semibold text-center mb-2 text-xl">{type === "paypal" ? "Paypal Topup" : "Card Topup"}</div>
      <div className="mb-2 text-lg">
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
          placeholder="Currency"
          className="text-black border border-gray-500 rounded mb-4"
          name="payment_method"
          onChange={(option: any) => {
            setCurrency(option.value);
          }}
        />
        <div className="mb-4">
          <label htmlFor="amount">
            <input
              type="number"
              name="amount"
              id="amount_input"
              placeholder="Topup Amount (Min $1.00)"
              className="text-black p-2 w-full rounded border border-gray-500"
              onChange={(e: any) => setAmount(e.target.value)}
            />
          </label>
        </div>
        {(currency && amount >= 1) && <div>*Click this {type} button to continue</div>}
        {currency && amount >= 1 ? <PaypalBtn
          type={type}
          currency={currency}
          amount={amount}
          paypalCredentials={paypalCredentials}
        /> : <Button type="button" disabled={true} title={amount >= 1 ? "Please fill all information to continue" : "Minimum topup amount is $1.00"} wrapperClassName="w-full bg-gray-500 p-2 text-white font-semibold rounded text-center" />}
      </form>

      <Button type="button" wrapperClassName="w-fit border px-2 py-1 border-gray-500 rounded mt-2" buttonClassName="w-full h-full flex items-center gap-2" onClick={onBackClick} >
        <FaChevronCircleLeft />
        <span>Back</span>
      </Button>
    </div>
  );
};

export default PaypalForm;
