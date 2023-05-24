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
      topup_amount 
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
