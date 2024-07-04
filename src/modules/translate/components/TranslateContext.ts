import { createContext } from "react";
import { ITranslateStates, TRANSLATE_STATES } from "../lib/translateStates";
import { ITranslateReducerAction } from "../lib/translateReducer";

interface ITranslateContext {
  translateStates: ITranslateStates;
  translateDispatch: React.Dispatch<ITranslateReducerAction>;
}

export const TranslateContext = createContext<ITranslateContext>({
  translateStates: TRANSLATE_STATES,
  translateDispatch: () => {},
});
