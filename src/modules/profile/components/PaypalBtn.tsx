import React from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';

interface IPaypalBtn {
  type: string,
  paypalCredentials: any;
  currency: string;
  amount: number;
}

const PaypalBtn = (props: IPaypalBtn) => {
  const { type, paypalCredentials, currency, amount } = props;
  const { PAYPAL_URL, PAYPAL_CLIENT_ID, PAYPAL_SECRET } = paypalCredentials;

  const FUNDING_SOURCES = type === "paypal" ? [FUNDING.PAYPAL] : [FUNDING.CARD];

  const initialOptions = {
    "clientId": String(PAYPAL_CLIENT_ID),
    "enable-funding": "paylater,venmo",
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "LanguageAI Topup",
          amount: {
            currency_code: currency,
            value: 0.01,
          },
        },
      ],
    }).then((orderID: string) => {
      return orderID;
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order?.capture().then((det: any) => {
      console.log("det", det);
      const { payer } = det;
      console.log("payerL ", payer);
    })
  };

  return (
    <div className="">
      <PayPalScriptProvider options={initialOptions}>
        {
          FUNDING_SOURCES.map(fundingSource => {
            return (
              <PayPalButtons
                key={fundingSource}
                fundingSource={fundingSource}
                style={{
                  layout: 'vertical',
                  shape: 'rect',
                }}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={(error) => toast.error("Fail to process your payment, please try again")}
              />)
          })
        }
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalBtn;
