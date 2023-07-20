import React from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';

const PaypalBtn = () => {
  const FUNDING_SOURCES = [
    FUNDING.PAYPAL,
    FUNDING.PAYLATER,
    FUNDING.VENMO,
    FUNDING.CARD
  ];

  const initialOptions = {
    "clientId": String(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID),
    "enable-funding": "paylater,venmo",
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
                createOrder={async (data, actions) => {
                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/paypal/orders/`, {
                      method: "POST"
                    });

                    const details = await response.json();
                    console.log("details: ", details);
                    return details.id;
                  } catch (error) {
                    toast.error("Fail to Access Paypal, please try again");
                    return;
                  }
                }}
                onApprove={async (data, actions) => {
                  return actions.order?.capture().then((det) => {
                    console.log("det", det);
                    const {payer} = det;
                    console.log("payerL ",payer);
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
