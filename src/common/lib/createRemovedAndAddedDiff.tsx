import { diffChars } from "diff";
import React from "react";

export const createRemovedAndAddedDiff = (
  sourceText: string,
  completionText: string
) => {
  const diff = diffChars(sourceText, completionText);

  const removedDiff = diff.filter((d) => !d.added);
  const addedDiff = diff.filter((d) => !d.removed);

  return { removedDiff, addedDiff };
};
