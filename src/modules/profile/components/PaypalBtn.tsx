import React, { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { createTopup } from "../lib/createTopup";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { verifyPaypalTopup } from "../lib/verifyPaypalTopup";
import Router from "next/router";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface IPaypalBtn {
  type: string;
  paypalCredentials: any;
  currency: string;
  amount: number;
}

const PaypalBtn = (props: IPaypalBtn) => {
  const { type, paypalCredentials, currency, amount } = props;
  const { PAYPAL_CLIENT_ID } = paypalCredentials;

  const FUNDING_SOURCES = type === "paypal" ? [FUNDING.PAYPAL] : [FUNDING.CARD];

  const initialOptions = {
    clientId: String(PAYPAL_CLIENT_ID),
    "enable-funding": "paylater,venmo",
    currency: currency,
  };

  const createOrder = async (data: any, actions: any) => {
    const token: any = Cookies.get("token");
    const user: any = jwtDecode(token);
    const topup = await createTopup(
      user.id,
      amount * (currency === "USD" ? 14000 : 11000)
    );

    return actions.order
      .create({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: topup.id,
            description: "LanguageAI Topup",
            amount: {
              value: amount,
              currency_code: currency,
            },
          },
        ],
      })
      .then((orderID: string) => {
        return orderID;
      });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order?.capture().then(async (det: any) => {
      const referenceID = det?.purchase_units[0].reference_id;
      const topup = await verifyPaypalTopup(referenceID);
      if (topup?.id) {
        toast.success("Topup Success, redirecting to Profile Page");
        setTimeout(() => Router.push("/profile/"), 1000);
        return;
      }
      toast.error("Fail to update your balance, please contact support");
      return;
    });
  };

  return (
    <div className="">
      <PayPalScriptProvider options={initialOptions}>
        {FUNDING_SOURCES.map((fundingSource) => {
          return (
            <PayPalButtons
              key={fundingSource}
              fundingSource={fundingSource}
              style={{
                layout: "vertical",
                shape: "rect",
              }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={(error) => {
                sendFirebaseEvent("topup_paypal_error", {});
                toast.error("Fail to process your payment, please try again");
              }}
            />
          );
        })}
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalBtn;
