import axios from "axios";
import { IPrompt } from "./interfaces";
import { IAuthorError } from "../interfaces";
import { SpeechToTextTimestampGranularities } from "@/modules/speech-to-text/lib/speechToTextStates";

interface IRequest {
  user_id: string;
  file_url: string;
  language: string;
  temperature: number;
  timestamp_granularities?: SpeechToTextTimestampGranularities;
}

export const fetchPromptsTranscriptions = async (
  req: IRequest
): Promise<IPrompt[] & IPrompt & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/transcriptions/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
