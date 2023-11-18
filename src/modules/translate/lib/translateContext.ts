import { createContext } from "react";
import { TRANSLATE_STATES } from "./translateStates";

export interface ITranslateDispatchPayload {
  type: string;
  name: string;
  value: any;
}

export const TranslateContext = createContext({
  translateStates: TRANSLATE_STATES,
  dispatch: (dispatchPayload: ITranslateDispatchPayload) => {},
});
