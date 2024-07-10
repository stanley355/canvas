import axios from "axios";
import { IPrompt } from "../../api/prompts/interfaces";
import { IAuthorError } from "../interfaces";

export enum TextToSpeechVoice {
  Alloy = "Alloy",
  Echo = "Echo",
  Fable = "Fable",
  Onyx = "Onyx",
  Nova = "Nova",
  Shimmer = "Shimmer",
}

interface IRequest {
  user_id: string;
  input: string;
  voice: TextToSpeechVoice;
  speed: number // 0.25 - 4.0
}

export const fetchPromptsTts = async (
  req: IRequest
): Promise<IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/tts/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
