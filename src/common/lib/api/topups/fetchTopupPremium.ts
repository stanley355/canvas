import axios from "axios";
import { PremiumTopupDuration } from "./interfaces";

export const fetchTopupPremium = async (
  user_id: string,
  duration: PremiumTopupDuration
) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/topups/premium/`;

  try {
    const { data } = await axios.post(url, { user_id, duration });
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
