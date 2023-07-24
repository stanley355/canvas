import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export interface ISaveUserPremiumPrompt {
  instruction: string;
  prompt_token: number;
  completion_token: number;
  prompt_text: string;
  completion_text: string;
  document_id?: string;
}

export const saveUserPremiumPrompt = async (
  payload: ISaveUserPremiumPrompt
) => {
  const token = Cookies.get("token");
  if (!token) return;

  const decodedToken: any = jwtDecode(token);
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const savePromptPayload = {
    user_id: decodedToken.id,
    ...payload,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/premium/",
    },
    data: savePromptPayload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
