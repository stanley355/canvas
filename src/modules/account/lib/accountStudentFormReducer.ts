import { IAccountStudentFormStates } from "./AccountStudentFormStates";

export interface IAccountStudentFormAction {
  name: keyof IAccountStudentFormStates;
  value: any;
}

export const accountStudentFormReducer = (
  state: IAccountStudentFormStates,
  action: IAccountStudentFormAction
) => {
  const newStates = structuredClone(state);
  newStates[action.name] = action.value;
  return newStates;
};
