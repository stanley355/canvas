import { createContext } from "react";
import { CHECKBOT_STATES, ICheckbotStates } from "../lib/checkbotStates";
import { ICheckbotReducerAction } from "../lib/checkbotReducer";

interface ICheckbotContext {
  checkbotStates: ICheckbotStates,
  checkbotDispatch: React.Dispatch<ICheckbotReducerAction>
}

export const CheckbotContext = createContext<ICheckbotContext>({
  checkbotStates: CHECKBOT_STATES,
  checkbotDispatch: ()=> {}
})