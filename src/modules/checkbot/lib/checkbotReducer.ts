import { ICheckbotStates } from "./checkbotStates";

export interface ICheckbotReducerAction {
  key: keyof ICheckbotStates;
  value: any;
}

export const checkbotReducer = (
  state: Record<keyof ICheckbotStates, any>,
  action: ICheckbotReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
