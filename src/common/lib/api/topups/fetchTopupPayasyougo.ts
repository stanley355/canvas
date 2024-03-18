import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

interface IFetchTopupPayasyouGo {
  userID: string;
  topupAmount: number;
}

export const fetchTopupPayasyouGo = async (payload: IFetchTopupPayasyouGo) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/payasyougo/`,
    },
    data: {
      user_id: payload.userID,
      topup_amount: payload.topupAmount,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
