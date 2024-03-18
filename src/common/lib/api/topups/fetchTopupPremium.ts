import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export enum TopupPremiumDuration {
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  HalfYearly = "HalfYearly",
}

interface IFetchTopupPremium {
  userID: string;
  duration: TopupPremiumDuration;
}

export const fetchTopupPremium = async (payload: IFetchTopupPremium) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/premium/`,
    },
    data: {
      user_id: payload.userID,
      duration: payload.duration,
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
