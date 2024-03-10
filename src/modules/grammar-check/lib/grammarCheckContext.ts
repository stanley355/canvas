import { createContext } from "react";
import { GRAMMAR_CHECK_STATES } from "./grammarCheckStates";
import { IGrammarCheckReducerAction } from "./grammarCheckReducer";

export const GrammarCheckContext = createContext({
  grammarCheckStates: GRAMMAR_CHECK_STATES,
  dispatch: (_action: IGrammarCheckReducerAction) => {},
});
