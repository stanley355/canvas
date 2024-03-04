import { createContext } from "react";
import { TRANSLATE_STATES_V2 } from "./translateStatesV2";
import { ITranslateReducerV2Action } from "./translateReducerV2";

export const TranslateContextV2 = createContext({
  translateStates: TRANSLATE_STATES_V2,
  dispatch: (_action: ITranslateReducerV2Action) => {},
});
