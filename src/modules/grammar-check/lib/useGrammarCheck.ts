import { useContext } from "react";
import { GrammarCheckContext } from "./grammarCheckContext";

export const useGrammarCheck = () => {
  const context = useContext(GrammarCheckContext);
  return context;
};
