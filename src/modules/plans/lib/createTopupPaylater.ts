import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";
import { SubscriptionDurationType } from "./interfaces";

export const createTopupPaylater = async (
  user_id: string,
  topup_amount: number,
  durationType: SubscriptionDurationType
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/paylater/",
    },
    data: {
      user_id,
      topup_amount,
      subscription_duration_type: durationType,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    const errorRes = axiosErrorHandler(error, URL);
    return errorRes;
  }
};
