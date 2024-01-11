import { createContext } from "react";
import { TRANSLATE_STATES } from "./translateStates";
import { ITranslateStates } from "./translateStatesInterfaces";

export interface ITranslateDispatchPayload {
  type: string;
  name: keyof ITranslateStates;
  value: any;
}

export const TranslateContext = createContext({
  translateStates: TRANSLATE_STATES,
  dispatch: (dispatchPayload: ITranslateDispatchPayload) => {},
});
