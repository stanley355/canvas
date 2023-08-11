import axios from "axios";

export const fetchActiveSubscription = async (userID: string) => {
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
  } catch (error:any) {
    return error?.response.data ? error.response.data : null;
  }
};
