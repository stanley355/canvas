import axios from "axios";
import { IPrompt } from "./interfaces";
import { IAuthorError } from "../interfaces";

export enum PromptAudioSpeechVoice {
  Alloy = "Alloy",
  Echo = "Echo",
  Fable = "Fable",
  Onyx = "Onyx",
  Nova = "Nova",
  Shimmer = "Shimmer",
}

export enum PromptAudioSpeechResponseFormat {
  Mp3 = "Mp3",
  Wav = "Wav",
  Opus = "Opus"
}

interface IRequest {
  user_id: string;
  input: string;
  speed?: number; // 0.25 - 4.0
  voice: PromptAudioSpeechVoice;
  response_format: PromptAudioSpeechResponseFormat
}

export const fetchPromptsAudioSpeech = async (
  req: IRequest
): Promise<IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/audio/speech/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
