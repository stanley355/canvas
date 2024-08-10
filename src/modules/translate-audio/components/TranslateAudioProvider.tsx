import { useReducer } from "react";
import { TranslateAudioContext } from "./TranslateAudioContext";
import { translateAudioReducer } from "../lib/TranslateAudioReducer";
import { TRANSLATE_AUDIO_STATES } from "../lib/TranslateAudioStates";

interface TranslateAudioProviderProps {
  children: React.ReactNode;
}

const TranslateAudioProvider = ({ children }: TranslateAudioProviderProps) => {
  const [translateAudioStates, translateAudioDispatch] = useReducer(
    translateAudioReducer,
    TRANSLATE_AUDIO_STATES
  );

  return (
    <TranslateAudioContext.Provider
      value={{ translateAudioStates, translateAudioDispatch }}
    >
      {children}
    </TranslateAudioContext.Provider>
  );
};

export default TranslateAudioProvider;
