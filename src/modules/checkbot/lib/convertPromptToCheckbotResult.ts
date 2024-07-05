import { diffChars } from "diff";
import { ICheckbotResult } from "./checkbotStates";

export const convertPromptToCheckbotResult = (
  userText: string,
  resultText: string
): ICheckbotResult => {
  const diff = diffChars(userText, resultText);

  const removed = diff.filter((d) => !d.added);
  const added = diff.filter((d) => !d.removed);

  return {
    base: resultText,
    removed,
    added,
  };
};
