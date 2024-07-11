import { ISpeechToTextStates } from "./speechToTextStates";

export interface ISpeechToTextReducerAction {
  key: keyof ISpeechToTextStates;
  value: any;
}

export const speechToTextReducer = (
  state: Record<keyof ISpeechToTextStates, any>,
  action: ISpeechToTextReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
