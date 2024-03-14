import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export interface IFetchNewPrompts {
  user_id: string;
  system_prompt: string;
  user_prompt: string;
}

export const fetchNewPrompts = async (payload: IFetchNewPrompts) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "POST",
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
