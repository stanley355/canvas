import axios from "axios";
import { IAuthorError } from "../interfaces";
import {
  ITranscription,
  SpeechToTextTimestampGranularities,
} from "@/modules/speech-to-text/lib/speechToTextStates";

interface IRequest {
  user_id: string;
  file_url: string;
  file_name: string;
  language: string;
  temperature: number;
  timestamp_granularities?: SpeechToTextTimestampGranularities;
}

export const fetchPromptsAudioTranscriptions = async (
  req: IRequest
): Promise<ITranscription & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/prompts/audio/transcriptions/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
