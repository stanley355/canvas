import { ITextToSpeechStates } from "./textToSpeechStates";

export interface ITextToSpeechReducerAction {
  key: keyof ITextToSpeechStates;
  value: any;
}

export const textToSpeechReducer = (
  state: Record<keyof ITextToSpeechStates, any>,
  action: ITextToSpeechReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
