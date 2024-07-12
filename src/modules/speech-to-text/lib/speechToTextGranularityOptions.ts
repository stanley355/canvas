import { SpeechToTextTimestampGranularities } from "./speechToTextStates";

export const SPEECH_TO_TEXT_GRANULARITY_OPTIONS = [
  {
    label: "Timestamp: None",
    value: SpeechToTextTimestampGranularities.None,
  },
  {
    label: "Timestamp: Word",
    value: SpeechToTextTimestampGranularities.Word,
  },
  {
    label: "Timestamp: Segment",
    value: SpeechToTextTimestampGranularities.Segment,
  },
];
