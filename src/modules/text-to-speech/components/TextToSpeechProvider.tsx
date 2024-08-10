import { useReducer } from "react";
import { TextToSpeechContext } from "./TextToSpeechContext";
import { textToSpeechReducer } from "../lib/textToSpeechReducer";
import { TEXT_TO_SPEECH_STATES } from "../lib/textToSpeechStates";

type TTextToSpeechProviderProps = {
  children: React.ReactNode;
};

const TextToSpeechProvider = ({ children }: TTextToSpeechProviderProps) => {
  const [textToSpeechStates, textToSpeechDispatch] = useReducer(
    textToSpeechReducer,
    TEXT_TO_SPEECH_STATES
  );

  return (
    <TextToSpeechContext.Provider
      value={{ textToSpeechStates, textToSpeechDispatch }}
    >
      {children}
    </TextToSpeechContext.Provider>
  );
};

export default TextToSpeechProvider;
