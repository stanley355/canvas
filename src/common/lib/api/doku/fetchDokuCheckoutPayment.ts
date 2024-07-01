import axios from "axios";
import { apiErrorHandler } from "../apiErrorHandler";
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
  } catch (error) {
    return apiErrorHandler(error);
  }
};
