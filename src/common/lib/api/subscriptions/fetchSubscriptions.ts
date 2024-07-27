import axios from "axios";
import { SubscriptionsDuration } from "./SubscriptionsDuration";

export const fetchSubscriptions = async (
  user_id: string,
  duration: SubscriptionsDuration
) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/subscriptions/`;

  try {
    const { data } = await axios.post(url, { user_id, duration });
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
