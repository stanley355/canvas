import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchCreateDocument = async (userID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: {
      user_id: userID,
      name: "Dokumen Tanpa Judul",
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
