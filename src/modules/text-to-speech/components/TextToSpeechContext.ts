import { createContext } from "react";
import {
  ITextToSpeechStates,
  TEXT_TO_SPEECH_STATES,
} from "../lib/textToSpeechStates";
import { ITextToSpeechReducerAction } from "../lib/textToSpeechReducer";

interface ITextToSpeechContext {
  textToSpeechStates: ITextToSpeechStates;
  textToSpeechDispatch: React.Dispatch<ITextToSpeechReducerAction>;
}

export const TextToSpeechContext = createContext<ITextToSpeechContext>({
  textToSpeechStates: TEXT_TO_SPEECH_STATES,
  textToSpeechDispatch: () => {},
});
