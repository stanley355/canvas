import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";
import { ITopup } from "../topups/interfaces";
import { IUser } from "../users/interfaces";

export const fetchDokuCheckoutPayment = async (topup: ITopup, user: IUser) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/doku/checkout-payment/`;

  const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}account/`;

  const dokuPayload = {
    order: {
      amount: topup.topup_amount,
      invoice_number: topup.id,
      callback_url: callbackUrl,
    },
    payment: {
      payment_due_date: 60,
    },
    customer: {
      name: user.fullname,
      email: user.email,
    },
  };

  const axiosConfig = {
    method: "POST",
    url: URL,
    data: dokuPayload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
