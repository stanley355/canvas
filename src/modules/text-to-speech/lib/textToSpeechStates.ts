import { PromptAudioSpeechResponseFormat } from "@/common/lib/api/prompts/fetchPromptsAudioSpeech";

export interface ITextToSpeechStates {
  userText: string;
  currentFileID: string;
  oldFileID: string;
  audioFormat: PromptAudioSpeechResponseFormat
}

export const TEXT_TO_SPEECH_STATES: ITextToSpeechStates = {
  userText: "",
  currentFileID: "",
  oldFileID: "",
  audioFormat: PromptAudioSpeechResponseFormat.Mp3
};
