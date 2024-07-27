import { IOption } from "@/common/components/interfaces";
import { PromptAudioSpeechVoice } from "@/common/lib/api/prompts/fetchPromptsAudioSpeech";

export const TTS_VOICE_OPTIONS: IOption[] = [
  {
    label: "Voice: Alpha",
    value: PromptAudioSpeechVoice.Alloy,
  },
  {
    label: "Voice: Beta",
    value: PromptAudioSpeechVoice.Echo,
  },
  {
    label: "Voice: Gamma",
    value: PromptAudioSpeechVoice.Fable,
  },
  {
    label: "Voice: Delta",
    value: PromptAudioSpeechVoice.Nova,
  },
  {
    label: "Voice: Epsilon",
    value: PromptAudioSpeechVoice.Onyx,
  },
  {
    label: "Voice: Zeta",
    value: PromptAudioSpeechVoice.Shimmer,
  },
];
