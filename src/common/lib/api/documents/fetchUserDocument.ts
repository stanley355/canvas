import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchUserDocument = async (userID: string, documentID: string)=> {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?user_id=${userID}&document_id=${documentID}`,
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
