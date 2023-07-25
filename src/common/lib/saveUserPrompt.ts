import axios from "axios";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

export interface ISaveUserPrompt {
  instruction: string;
  prompt_token: number;
  completion_token: number;
  prompt_text: string;
  completion_text: string;
  document_id?: string;
}

export const saveUserPrompt = async (payload: ISaveUserPrompt) => {
  const token = Cookies.get("token");
  if (!token) return;

  const decodedToken: any = decode(token);
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const savePromptPayload = {
    user_id: decodedToken.id,
    ...payload,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: savePromptPayload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};
