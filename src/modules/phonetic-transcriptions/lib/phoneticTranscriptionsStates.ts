import { IOption } from "@/common/components/interfaces";

export interface IPhoneticTranscriptionsStates {
  language: IOption;
  userText: string;
  resultText: string;
}
export const PHONETIC_TRANSCRIPTIONS_STATES: IPhoneticTranscriptionsStates = {
  language: {
    label: "",
    value: "",
  },
  userText: "",
  resultText: "",
};
