
import axios from "axios";
import { IUser } from "../users/userInterfaces";
import { axiosErrorHandler } from "../axiosErrorHandler";


export interface IFetchUserPrompts {
  instruction: string;
  prompt_token: number;
  completion_token: number;
  prompt_text: string;
  completion_text: string;
}

export const fetchUserPrompts = async (user: IUser, payload: IFetchUserPrompts) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const fetchPromptPayload = {
    user_id: user.id,
    ...payload,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: fetchPromptPayload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
