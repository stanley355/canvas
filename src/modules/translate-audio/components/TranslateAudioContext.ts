import { createContext } from "react";
import {
  ITranslateAudioStates,
  TRANSLATE_AUDIO_STATES,
} from "../lib/TranslateAudioStates";
import { ITranslateAudioReducerAction } from "../lib/TranslateAudioReducer";

interface ITranslateAudioContext {
  translateAudioStates: ITranslateAudioStates;
  translateAudioDispatch: React.Dispatch<ITranslateAudioReducerAction>;
}

export const TranslateAudioContext = createContext<ITranslateAudioContext>({
  translateAudioStates: TRANSLATE_AUDIO_STATES,
  translateAudioDispatch: () => {},
});
