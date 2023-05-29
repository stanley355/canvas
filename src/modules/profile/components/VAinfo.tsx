import React from 'react';
import Countdown from 'react-countdown';

interface IVAInfo {
  info: any;
}

const VAinfo = ({ info }: IVAInfo) => (
  <div>
    <div>Payment via {info.bank_name}</div>
    <div>Amount: {info.amount}</div>
    <div>Virtual Account Number: </div>
    <div>{info.virtual_account_number}</div>
    <Countdown date={new Date(info.expired_date_utc)} />
    <div>Notes:</div>
    <div>* Before payment: please don't refresh or quit this page</div>
    <div>** After payment: please refresh the page to see your updated balance</div>
  </div>
);

export default VAinfo;