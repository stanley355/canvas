import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchAIChatCompletion = async (content: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;

  try {
    const { data } = await axios.post(URL, { content });
    return data;
  } catch (error) {
    const errorRes = await axiosErrorHandler(URL, error);
    return errorRes;
  }
};
