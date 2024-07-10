import { TextToSpeechVoice } from "@/common/lib/api/prompts/fetchPromptsTts";

export interface ITextToSpeechStates {
  userText: string;
  currentFileID: string;
  oldFileID: string;
  voice: TextToSpeechVoice;
  speed: 0.5 | 1.0 | 1.5 | 2.0;
}

export const TEXT_TO_SPEECH_STATES: ITextToSpeechStates = {
  userText: "",
  currentFileID: "",
  oldFileID: "",
  voice: TextToSpeechVoice.Alloy,
  speed: 1.0,
};
