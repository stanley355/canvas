import { ITranslateStatesV2 } from "./translateStatesV2";

export interface ITranslateReducerV2Action {
  type: string;
  name: keyof ITranslateStatesV2;
  value: any;
}

export const translateReducerV2 = (
  state: ITranslateStatesV2,
  action: ITranslateReducerV2Action
) => {
  switch (action.type) {
    case "SET":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};
