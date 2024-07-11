import { createContext } from "react";
import { ISpeechToTextStates, SPEECH_TO_TEXT_STATES } from "../lib/speechToTextStates";
import { ISpeechToTextReducerAction } from "../lib/speechToTextReducer";


interface ISpeechToTextContext {
  speechToTextStates: ISpeechToTextStates;
  speechToTextDispatch: React.Dispatch<ISpeechToTextReducerAction>;
}

export const SpeechToTextContext = createContext<ISpeechToTextContext>({
  speechToTextStates: SPEECH_TO_TEXT_STATES,
  speechToTextDispatch: () => {},
});
