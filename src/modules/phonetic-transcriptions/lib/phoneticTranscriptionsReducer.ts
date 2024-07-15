import { IPhoneticTranscriptionsStates } from "./PhoneticTranscriptionsStates";

export interface IPhoneticTranscriptionsReducerAction {
  key: keyof IPhoneticTranscriptionsStates;
  value: any;
}

export const phoneticTranscriptionsReducer = (
  state: Record<keyof IPhoneticTranscriptionsStates, any>,
  action: IPhoneticTranscriptionsReducerAction
) => {
  state[action.key] = action.value;
  return structuredClone(state);
};
