import axios from "axios";

export const fetchTopupPayasyougoV2 = async (
  user_id: string,
  amount: number
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/payasyougo/`,
    },
    data: {
      user_id,
      amount,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
