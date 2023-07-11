import axios from "axios";

export const findHistory = async (userID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/redis/history?userID=${userID}`;
  const axiosConfig = {
    method: "GET",
    url: URL,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
