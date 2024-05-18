import axios from "axios";
import { IPrompt } from "../../api/prompts/interfaces";
import { IAuthorErrorResponse } from "../authorErrorInterface";

export enum PromptsV2Type {
  Translate = "Translate",
  GrammarCheck = "GrammarCheck",
  ImageToText = "ImageToText",
  TextToSpeech = "TextToSpeech",
}

interface IFetchPromptsV2 {
  user_id: string;
  prompt_type: PromptsV2Type;
  system_content: string;
  user_content: string;
}

export const fetchPromptsV2 = async (
  data: IFetchPromptsV2
): Promise<IPrompt[] & IPrompt & IAuthorErrorResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/prompts/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
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
