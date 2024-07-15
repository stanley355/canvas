import { useReducer } from "react";
import { PhoneticTranscriptionsContext } from "./PhoneticTranscriptionsContext";
import { phoneticTranscriptionsReducer } from "../lib/PhoneticTranscriptionsReducer";
import { PHONETIC_TRANSCRIPTIONS_STATES } from "../lib/PhoneticTranscriptionsStates";

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
