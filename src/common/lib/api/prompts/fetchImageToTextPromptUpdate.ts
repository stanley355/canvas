import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

interface IFetchNewImageToTextPromptUpdate {
  userID: string;
  promptID: number;
  completionText: string;
}
export const fetchNewImageToTextPromptUpdate = async (
  payload: IFetchNewImageToTextPromptUpdate
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "PUT",
    url: URL,
    headers: {
      path: "/image-to-text/",
    },
    data: {
      user_id: payload.userID,
      prompt_id: payload.promptID,
      completion_text: payload.completionText,
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
