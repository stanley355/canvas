export interface IGrammarCheckStates {
  instruction: {
    label: string;
    value: string;
  };
  sourceText: string;
  resultText: string;
}

export const GRAMMAR_CHECK_STATES: IGrammarCheckStates = {
  instruction: {
    label: "",
    value: "",
  },
  sourceText: "",
  resultText: "",
};
