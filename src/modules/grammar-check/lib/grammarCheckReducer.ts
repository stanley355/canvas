import { IGrammarCheckStates } from "./grammarCheckStates";

export interface IGrammarCheckReducerAction {
  type?: "SET";
  name: keyof IGrammarCheckStates;
  value: any;
}

export const grammarCheckReducer = (
  state: IGrammarCheckStates,
  action: IGrammarCheckReducerAction
) => {
  switch (action.type) {
    case "SET":
      const newCloneStates:any = structuredClone(state);
      newCloneStates[action.name] = action.value;
      return newCloneStates;
    default:
      const newStates:any = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
  }
};
