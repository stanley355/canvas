export enum GrammarCheckDiffs {
  Original,
  Added,
  Removed,
}

export interface IGrammarCheckStates {
  instruction: string;
  sourceText: string;
  resultText: string;
  resultTextRemoved: string;
  resultTextAdded: string;
  activeDiff: GrammarCheckDiffs;
}

export const GRAMMAR_CHECK_STATES: IGrammarCheckStates = {
  instruction: "",
  sourceText: "",
  resultText: "",
  resultTextRemoved: "",
  resultTextAdded: "",
  activeDiff: GrammarCheckDiffs.Original,
};
