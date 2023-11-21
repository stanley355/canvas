import { useReducer } from "react";
import { checkbotReducer } from "../lib/checkbotReducer";
import { CHECKBOT_STATES } from "../lib/checkbotStates";
import { CheckbotContext } from "../lib/checkbotContext";

const CheckbotProvider = ({ children }: { children: React.ReactNode }) => {
  const [checkbotStates, dispatch] = useReducer(
    checkbotReducer,
    CHECKBOT_STATES
  );
  return (
    <CheckbotContext.Provider value={{ checkbotStates, dispatch }}>
      {children}
    </CheckbotContext.Provider>
  );
};

export default CheckbotProvider;
