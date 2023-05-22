import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export interface ISaveUserCheckbotData{
  prompt_token: number;
  completion_token: number;
  prompt_text: string,
  completion_text: string;
}

export const saveUserCheckbotData = async (payload: ISaveUserCheckbotData) => {
  const token = Cookies.get("token");
  if (!token) return;

  const decodedToken: any = jwtDecode(token);
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/checkbots/`;
  const saveCheckbotPayload = {
    user_id: decodedToken.id,
    ...payload
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: saveCheckbotPayload
  };

  const { data } = await axios(axiosConfig);
  return data;
};
