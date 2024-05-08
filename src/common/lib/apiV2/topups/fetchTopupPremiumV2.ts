import axios from "axios";

export enum TopupPremiumDuration {
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  HalfYearly = "HalfYearly",
}

export const fetchTopupPremiumV2 = async (user_id: string, duration: TopupPremiumDuration) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/topups/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/premium/`,
    },
    data: {
      user_id,
      duration,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error:any) {
    return error?.response?.data ? error.response.data : {}
  }
};
