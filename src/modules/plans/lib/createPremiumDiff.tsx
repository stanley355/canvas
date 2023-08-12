import { diffChars } from "diff";
import React from "react";

export const createPremiumDiff = (
  sourceText: string,
  completionText: string
) => {
  const diff = diffChars(sourceText, completionText);

  const removedDiff = diff
    .filter((d) => !d.added)
    .map((d, i) => (
      <span
        key={i}
        className={d.removed ? "underline font-semibold" : "text-black"}
      >
        {d.value}
      </span>
    ));
  const addedDiff = diff
    .filter((d) => !d.removed)
    .map((d, i) => (
      <span
        key={i}
        className={
          d.added ? "underline font-semibold text-green-600" : "text-black"
        }
      >
        {d.value}
      </span>
    ));

  return { removedDiff, addedDiff };
};
