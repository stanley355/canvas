import React from "react";
import Countdown from "react-countdown";

interface IVAInfo {
  info: any;
}

const VAinfo = ({ info }: IVAInfo) => (
  <div className="mt-4 text-lg">
    <div>
      Payment via: <i>{info.bank_name}</i>{" "}
    </div>
    <div className="mt-2">
      Amount: <i>Rp{info.amount}</i>{" "}
    </div>
    <div className="text-center lg:flex lg:flex-row lg:items-center lg:justify-center my-2">
      <div>Virtual Account Number: </div>
      <div className="lg:ml-2 italic underline text-blue-300">
        {info.virtual_account_number}
      </div>
    </div>
    <div className="border border-white p-2 rounded flex flex-row mb-4 justify-center">
      <div className="mr-2">Pay Before:</div>
      <Countdown date={new Date(info.expired_date_utc)} />
    </div>
    <div>Notes:</div>
    <div>* Before payment: please don't refresh or close this page</div>
    <div>
      ** After payment: please refresh the page to see your updated balance
    </div>
  </div>
);

export default VAinfo;
