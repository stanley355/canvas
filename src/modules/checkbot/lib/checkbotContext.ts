import { createContext } from "react";
import { CHECKBOT_STATES, ICheckbotStates } from "./checkbotStates";

export interface ICheckbotDispatchPayload {
  type: string;
  name: keyof ICheckbotStates;
  value: any;
}

export const CheckbotContext = createContext({
  checkbotStates: CHECKBOT_STATES,
  dispatch: (_dispatchPayload: ICheckbotDispatchPayload) => {},
});
