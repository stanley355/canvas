import { useReducer } from "react";
import { translateReducerV2 } from "../lib/translateReducerV2";
import { TRANSLATE_STATES_V2 } from "../lib/translateStatesV2";
import { TranslateContextV2 } from "../lib/translateContextV2";

const TranslateProviderV2 = ({ children }: { children: React.ReactNode }) => {
  const [translateStates, dispatch] = useReducer(
    translateReducerV2,
    TRANSLATE_STATES_V2
  );

  return (
    <TranslateContextV2.Provider value={{ translateStates, dispatch }}>
      {children}
    </TranslateContextV2.Provider>
  );
};

export default TranslateProviderV2;
