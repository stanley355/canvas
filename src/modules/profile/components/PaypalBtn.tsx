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

                  console.log("approve data", data);
                  try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/paypal/capture/`, {
                      method: "POST",
                      body: JSON.stringify({
                        orderId: data.orderID
                      })
                    });

                    const details = await response.json();
                    console.log("Approve detail", details);
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you message

                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
                    const errorDetail = Array.isArray(details.details) && details.details[0];

                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart();
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }

                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      msg += errorDetail.description ? ' ' + errorDetail.description : '';
                      msg += details.debug_id ? ' (' + details.debug_id + ')' : '';
                      toast.error(msg);
                    }

                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    toast.success('Transaction ' + transaction.status + ': ' + transaction.id + 'See console for all available details');
                  } catch (error) {
                    toast.error("Fail to Access Paypal, please try again");
                    return;
                  }
                }}
              />)
          })
        }
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalBtn;
