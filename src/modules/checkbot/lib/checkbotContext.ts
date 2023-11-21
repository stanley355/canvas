import { createContext } from "react";
import { CHECKBOT_STATES } from "@/modules/premium/lib/states";

export interface ICheckbotDispatchPayload {
  type: string;
  name: string;
  value: any;
}

export const CheckbotContext = createContext({
  checkbotStates: CHECKBOT_STATES,
  dispatch: (dispatchPayload: ICheckbotDispatchPayload) => {},
});
