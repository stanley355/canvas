import { diffChars } from "diff";
import React from "react";

export const createRemovedAndAddedDiff = (
  sourceText: string,
  completionText: string
) => {
  const diff = diffChars(sourceText, completionText);

  const removedDiff = diff
    .filter((d) => !d.added)
    .map((d, i) => (
      <span key={i} className={d.removed ? "text-red-500" : "text-black"}>
        {d.value}
      </span>
    ));
  const addedDiff = diff
    .filter((d) => !d.removed)
    .map((d, i) => (
      <span key={i} className={d.added ? "text-green-700" : "text-black"}>
        {d.value}
      </span>
    ));

  return { removedDiff, addedDiff };
};
