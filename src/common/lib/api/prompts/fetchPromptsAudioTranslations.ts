import axios from "axios";
import { IAuthorError } from "../interfaces";
import { IPrompt } from "./interfaces";

interface IRequest {
  user_id: string;
  file_url: string;
  file_name: string;
  temperature: number;
}

export const fetchPromptsAudioTranslations = async (
  req: IRequest
): Promise<IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/audio/translations/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
