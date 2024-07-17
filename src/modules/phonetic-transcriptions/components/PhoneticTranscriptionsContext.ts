import { createContext } from "react";
import { IPhoneticTranscriptionsStates, PHONETIC_TRANSCRIPTIONS_STATES } from "../lib/phoneticTranscriptionsStates";
import { IPhoneticTranscriptionsReducerAction } from "../lib/phoneticTranscriptionsReducer";

interface IPhoneticTranscriptionsContext {
  phoneticTranscriptionsStates: IPhoneticTranscriptionsStates;
  phoneticTranscriptionsDispatch: React.Dispatch<IPhoneticTranscriptionsReducerAction>;
}

export const PhoneticTranscriptionsContext =
  createContext<IPhoneticTranscriptionsContext>({
    phoneticTranscriptionsStates: PHONETIC_TRANSCRIPTIONS_STATES,
    phoneticTranscriptionsDispatch: () => {},
  });
