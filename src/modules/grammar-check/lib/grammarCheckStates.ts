export enum GrammarCheckDiffs {
  Original,
  Added,
  Removed,
}

export interface IGrammarCheckStates {
  instruction: string;
  sourceText: string;
  resultText: string;
  resultTextRemoved: any[];
  resultTextAdded: any[];
  activeDiff: GrammarCheckDiffs;
}

export const GRAMMAR_CHECK_STATES: IGrammarCheckStates = {
  instruction: "",
  sourceText: "",
  resultText: "",
  resultTextRemoved: [],
  resultTextAdded: [],
  activeDiff: GrammarCheckDiffs.Original,
};
