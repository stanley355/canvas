import axios from "axios";

export const createSubscription = async (user_id: string, topup_amount: number, durationType: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/subscriptions/",
    },
    data: {
      user_id,
      topup_amount,
      subscription_duration_type: durationType
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};