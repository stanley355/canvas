import { APP_STATES, IAppStates } from "./appStates";

export interface IAppReducerAction {
  name: keyof IAppStates;
  value: any;
}

export const appReducer = (
  state: Record<keyof IAppStates, any>,
  action: IAppReducerAction
) => {
  state[action.name] = action.value;
  return structuredClone(state);
};
