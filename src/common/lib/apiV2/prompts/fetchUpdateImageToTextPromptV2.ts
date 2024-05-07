import axios from "axios";
import { IPrompt } from "../../api/prompts/interfaces";
import { IAuthorErrorResponse } from "../authorErrorInterface";

interface IFetchUpdateImageToTextPromptsV2 {
  user_id: string;
  prompt_id: number;
  completion_text: string;
}

export const fetchUpdateImageToTextPromptsV2 = async (
  data: IFetchUpdateImageToTextPromptsV2
): Promise<IPrompt & IAuthorErrorResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/prompts/`;
  const axiosConfig = {
    method: "PUT",
    url: URL,
    headers: {
      path: "/image-to-text/",
    },
    data,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
