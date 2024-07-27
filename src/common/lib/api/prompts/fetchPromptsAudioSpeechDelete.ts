import axios from "axios";
import { IPrompt } from "./interfaces";
import { IAuthorError } from "../interfaces";

export const fetchPromptsAudioSpeechDelete = async (
  promptID: string
): Promise<IPrompt[] & IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/audio/speech-delete?prompt_id=${promptID}`;

  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
