import axios from "axios";
import { IUser } from "../users/userInterfaces";
import { IFetchUserPrompts } from "./fetchUserPrompts";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchUserPremiumPrompts = async (
  user: IUser,
  payload: IFetchUserPrompts
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const fetchPromptPayload = {
    user_id: user.id,
    ...payload,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/premium/",
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
