import { IAppStates } from "./appStates";

export interface IAppReducerAction {
  key: keyof IAppStates;
  value: any;
}

export const appReducer = (
  state: Record<keyof IAppStates, any>,
  action: IAppReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
