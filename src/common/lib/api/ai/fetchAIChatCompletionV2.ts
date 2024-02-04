import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchAIChatCompletionV2 = async (system: string, user: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion-v2/`;

  try {
    const { data } = await axios.post(URL, { system, user });
    return data;
  } catch (error) {
    const errorRes = await axiosErrorHandler(URL, error);
    return errorRes;
  }
};
