import { useReducer } from "react";
import { CheckbotContext } from "./CheckbotContext";
import { checkbotReducer } from "../lib/checkbotReducer";
import { CHECKBOT_STATES } from "../lib/checkbotStates";

interface CheckbotProviderProps {
  children: React.ReactNode;
}

const CheckbotProvider = (props: CheckbotProviderProps) => {
  const [checkbotStates, checkbotDispatch] = useReducer(
    checkbotReducer,
    CHECKBOT_STATES
  );

  return (
    <CheckbotContext.Provider value={{ checkbotStates, checkbotDispatch }}>
      {props.children}
    </CheckbotContext.Provider>
  );
};

export default CheckbotProvider;
