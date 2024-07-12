import { IOption } from "@/common/components/interfaces";

export const SPEECH_TO_TEXT_DIFF_OPTIONS: IOption[] = [
  { label: "Diff: Unset", value: 0.0 },
  { label: "Diff: Low", value: 0.25 },
  { label: "Diff: Mid", value: 0.5 },
  { label: "Diff: High", value: 0.75 },
];
