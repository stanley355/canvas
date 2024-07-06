import { useReducer } from "react";
import { TextToSpeechContext } from "./TextToSpeechContext";
import { textToSpeechReducer } from "../lib/textToSpeechReducer";
import { TEXT_TO_SPEECH_STATES } from "../lib/textToSpeechStates";

interface TextToSpeechProviderProps {
  children: React.ReactNode;
}

const TextToSpeechProvider = (props: TextToSpeechProviderProps) => {
  const [textToSpeechStates, textToSpeechDispatch] = useReducer(
    textToSpeechReducer,
    TEXT_TO_SPEECH_STATES
  );

  return (
    <TextToSpeechContext.Provider
      value={{ textToSpeechStates, textToSpeechDispatch }}
    >
      {props.children}
    </TextToSpeechContext.Provider>
  );
};

export default TextToSpeechProvider;
