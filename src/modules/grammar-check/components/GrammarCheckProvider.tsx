import { useReducer } from "react";
import { grammarCheckReducer } from "../lib/grammarCheckReducer";
import { GRAMMAR_CHECK_STATES } from "../lib/grammarCheckStates";
import { GrammarCheckContext } from "../lib/grammarCheckContext";

const GrammarCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const [grammarCheckStates, dispatch] = useReducer(
    grammarCheckReducer,
   GRAMMAR_CHECK_STATES 
  );

  return (
    <GrammarCheckContext.Provider value={{ grammarCheckStates, dispatch }}>
      {children}
    </GrammarCheckContext.Provider>
  );
};

export default GrammarCheckProvider;
