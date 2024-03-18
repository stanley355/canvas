import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchUserAccount = async (id: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `/account?id=${id}`,
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
