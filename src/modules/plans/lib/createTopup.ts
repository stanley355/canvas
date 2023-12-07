import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";

export const createTopup = async (user_id: string, topup_amount: number) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: {
      user_id,
      topup_amount,
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
