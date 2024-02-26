import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

interface IUpdateDocumentPayload {
  id: string;
  user_id: string;
  name: string;
  content: string | null;
  checkbot_completion: string | null;
}

export const fetchUpdateDocument = async (payload: IUpdateDocumentPayload) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "PUT",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
