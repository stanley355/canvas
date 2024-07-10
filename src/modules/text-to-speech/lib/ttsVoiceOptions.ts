import { IOption } from "@/common/components/interfaces";
import { TextToSpeechVoice } from "@/common/lib/api/prompts/fetchPromptsTts";

export const TTS_VOICE_OPTIONS: IOption[] = [
  {
    label: "Voice: Alpha",
    value: TextToSpeechVoice.Alloy,
  },
  {
    label: "Voice: Beta",
    value: TextToSpeechVoice.Echo,
  },
  {
    label: "Voice: Gamma",
    value: TextToSpeechVoice.Fable,
  },
  {
    label: "Voice: Delta",
    value: TextToSpeechVoice.Nova,
  },
  {
    label: "Voice: Epsilon",
    value: TextToSpeechVoice.Onyx,
  },
  {
    label: "Voice: Zeta",
    value: TextToSpeechVoice.Shimmer,
  },
];
