import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchUserSubscription = async (userID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/subscriptions/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `/active?user_id=${userID}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
