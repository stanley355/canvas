import { useReducer } from "react";
import { SpeechToTextContext } from "./SpeechToTextContext";
import { speechToTextReducer } from "../lib/speechToTextReducer";
import { SPEECH_TO_TEXT_STATES } from "../lib/speechToTextStates";

interface SpeechToTextProviderProps {
  children: React.ReactNode;
}

const SpeechToTextProvider = ({ children }: SpeechToTextProviderProps) => {
  const [speechToTextStates, speechToTextDispatch] = useReducer(
    speechToTextReducer,
    SPEECH_TO_TEXT_STATES
  );

  return (
    <SpeechToTextContext.Provider
      value={{ speechToTextStates, speechToTextDispatch }}
    >
      {children}
    </SpeechToTextContext.Provider>
  );
};

export default SpeechToTextProvider;
