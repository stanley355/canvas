import React from "react";
import Countdown from "react-countdown";

interface IVAInfo {
  info: any;
}

const VAinfo = ({ info }: IVAInfo) => (
  <div className="mt-4 text-lg">
    <div>
      Payment via: <i>{info.bank_name} VA</i>
    </div>
    <div className="mt-2">
      Amount: <i>Rp{info.amount}</i>{" "}
    </div>
    <div className="text-center text-xl  mt-8 font-semibold">
      <div>Virtual Account Number: </div>
      <div className="lg:ml-2 italic underline text-blue-500">
        {info.virtual_account_number}
      </div>
    </div>
    <div className="my-2 mb-4 text-center font-semibold">
      a.n Language - Stanley Winata
    </div>
    <div className="border border-gray-500 p-2 rounded flex flex-row mb-8 justify-center">
      <div className="mr-2">Pay Before:</div>
      <Countdown date={new Date(info?.expired_date_utc ?? info.expired_date)} />
    </div>
    <div className="font-semibold">Notes:</div>
    <div className="mb-4">
      1. Before payment: <b>Don&apos;t </b> refresh or close this page
    </div>
    <div className="mb-4">
      2. During payment: <b>Transfer the exact amount </b> e.g. transfer
      Rp11.000 if your topup is Rp11.000
    </div>
    <div>
      3. After payment: Refresh the page to see updated balance, there might be{" "}
      <i>a 5 minutes delay</i>
    </div>
  </div>
);

export default VAinfo;
