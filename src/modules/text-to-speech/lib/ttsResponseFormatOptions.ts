import { IOption } from "@/common/components/interfaces";
import { PromptAudioSpeechResponseFormat } from "@/common/lib/api/prompts/fetchPromptsAudioSpeech";

export const TTS_RESPONSE_FORMAT_OPTIONS: IOption[] = [
  {
    label: "Format: Mp3",
    value: PromptAudioSpeechResponseFormat.Mp3,
  },
  {
    label: "Format: Wav",
    value: PromptAudioSpeechResponseFormat.Wav,
  },
  {
    label: "Format: Opus",
    value: PromptAudioSpeechResponseFormat.Opus,
  },
];
