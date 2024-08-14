import axios from "axios";
import { ISubscription } from "../subscriptions/interfaces";
import { IUser } from "../users/interfaces";

export const fetchDokuCheckoutPayment = async (
  subscription: ISubscription,
  user: IUser
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/doku/checkout-payment/`;

  const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}account/`;

  const dokuPayload = {
    order: {
      amount: subscription.price,
      invoice_number: subscription.id,
      callback_url: callbackUrl,
    },
    payment: {
      payment_due_date: 60,
      payment_method_types: [
        "VIRTUAL_ACCOUNT_BCA",
        "VIRTUAL_ACCOUNT_BANK_MANDIRI",
        "VIRTUAL_ACCOUNT_BANK_SYARIAH_MANDIRI",
        "VIRTUAL_ACCOUNT_DOKU",
        "VIRTUAL_ACCOUNT_BRI",
        "VIRTUAL_ACCOUNT_BNI",
        "VIRTUAL_ACCOUNT_BANK_PERMATA",
        "VIRTUAL_ACCOUNT_BANK_CIMB",
        "VIRTUAL_ACCOUNT_BANK_DANAMON",
        "EMONEY_SHOPEEPAY",
        "EMONEY_OVO",
      ],
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
  } catch (error: any) {
    return {
      status: error?.response?.status ? error.response.status : 500,
      statusText: error?.response?.statusText ? error.response.statusText : "",
      headers: error?.response?.headers ? error.response.headers : {},
      data: error?.response?.data ? error.response.data : null,
    };
  }
};
