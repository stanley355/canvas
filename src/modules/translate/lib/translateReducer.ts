import { ITranslateStates } from "./translateStates";

export interface ITranslateReducerAction {
  key: keyof ITranslateStates;
  value: any;
}

export const translateReducer = (
  state: Record<keyof ITranslateStates, any>,
  action: ITranslateReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
