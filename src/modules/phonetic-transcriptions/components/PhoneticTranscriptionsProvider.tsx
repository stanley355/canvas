import { useReducer } from "react";
import { PhoneticTranscriptionsContext } from "./PhoneticTranscriptionsContext";
import { phoneticTranscriptionsReducer } from "../lib/phoneticTranscriptionsReducer";
import { PHONETIC_TRANSCRIPTIONS_STATES } from "../lib/phoneticTranscriptionsStates";

interface PhoneticTranscriptionsProviderProps {
  children: React.ReactNode;
}

const PhoneticTranscriptionsProvider = ({
  children,
}: PhoneticTranscriptionsProviderProps) => {
  const [phoneticTranscriptionsStates, phoneticTranscriptionsDispatch] =
    useReducer(phoneticTranscriptionsReducer, PHONETIC_TRANSCRIPTIONS_STATES);

  return (
    <PhoneticTranscriptionsContext.Provider
      value={{ phoneticTranscriptionsStates, phoneticTranscriptionsDispatch }}
    >
      {children}
    </PhoneticTranscriptionsContext.Provider>
  );
};

export default PhoneticTranscriptionsProvider;
