import { useReducer } from "react";
import { translateReducer } from "../lib/translateReducer";
import { TRANSLATE_STATES } from "../lib/translateStates";
import { TranslateContext } from "../lib/translateContext";

const TranslateProvider = ({ children }: { children: React.ReactNode }) => {
  const [translateStates, dispatch] = useReducer(
    translateReducer,
    TRANSLATE_STATES
  );
  return (
    <TranslateContext.Provider value={{ translateStates, dispatch }}>
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
