import axios from "axios";
import { IPrompt } from "../../api/prompts/interfaces";
import { IAuthorError } from "../interfaces";

export enum PromptsType {
  Translate = "Translate",
  ImageToText = "ImageToText",
  TextToSpeech = "TextToSpeech",
  Checkbot = "Checkbot",
  PhoneticTranscriptions = "PhoneticTranscriptions",
}

interface IRequest {
  user_id: string;
  prompt_type: PromptsType;
  system_content: string;
  user_content: string;
  n?: number;
  temperature?: number;
}

export const fetchPrompts = async (
  req: IRequest
): Promise<IPrompt[] & IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
