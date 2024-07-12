import { IOption } from "@/common/components/interfaces";

export enum SpeechToTextTimestampGranularities {
  None = "",
  Word = "Word",
  Segment = "Segment",
}

export interface ITranscriptionWord {
  word: string;
  start: number;
  end: number;
}

export interface ITranscriptionSegment {
  id: number;
  seek: number;
  start: number;
  end: number;
  text: string;
  tokens: number[];
  temperature: number;
  avg_logprob: number;
  compression_ratio: number;
  no_speech_prob: number;
}

export interface ITranscription {
  task: string;
  language: string;
  duration: number;
  text: string;
  words: ITranscriptionWord[];
  segments: ITranscriptionSegment[];
}

export interface ISpeechToTextStates {
  file_url: string;
  language: IOption;
  temperature: 0.0; // max 1.0
  timestamp_granularities: SpeechToTextTimestampGranularities;
  transcription: ITranscription | null;
}

export const SPEECH_TO_TEXT_STATES: ISpeechToTextStates = {
  file_url: "",
  language: {
    label: "",
    value: "",
  },
  temperature: 0.0,
  timestamp_granularities: SpeechToTextTimestampGranularities.None,
  transcription: null,
};
