import { ITranslateAudioStates } from "./TranslateAudioStates";

export interface ITranslateAudioReducerAction {
  key: keyof ITranslateAudioStates;
  value: any;
}

export const translateAudioReducer = (
  state: Record<keyof ITranslateAudioStates, any>,
  action: ITranslateAudioReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
