import React from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';

interface IPaypalBtn {
  type: "paypal" | "card",
  paypalCredentials: any;
}

const PaypalBtn = (props: IPaypalBtn) => {
  const { type, paypalCredentials } = props;
  const { PAYPAL_URL, PAYPAL_CLIENT_ID, PAYPAL_SECRET } = paypalCredentials;

  const FUNDING_SOURCES = type === "paypal" ? [FUNDING.PAYPAL] : [FUNDING.CARD];

  const initialOptions = {
    "clientId": String(PAYPAL_CLIENT_ID),
    "enable-funding": "paylater,venmo",
  };

  const createOrder = async (data: any, actions: any) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Sunflower",
          amount: {
            currency_code: "USD",
            value: 20,
          },
        },
      ],
    }).then((orderID: string) => {
      return orderID;
    });
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
                onApprove={async (data, actions) => {
                  return actions.order?.capture().then((det) => {
                    console.log("det", det);
                    const { payer } = det;
                    console.log("payerL ", payer);
                  })
                }}
              />)
          })
        }
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalBtn;
