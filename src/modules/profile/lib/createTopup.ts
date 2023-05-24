import axios from "axios";

export interface ICreateTopup {
  user_id: string;
  topup_amount: string;
}

export const createTopup = async (payload: ICreateTopup) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
