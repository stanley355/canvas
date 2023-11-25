import React from "react";
import { useCheckbot } from "../lib/useCheckbot";
import { CheckbotResultFormatEnum } from "../lib/checkbotStates";

const CheckbotRemovedAndAddedBox = () => {
  const { checkbotStates } = useCheckbot();
  const {
    checkbotResultFormat,
    checkbotCompletionRemoved,
    checkbotCompletionAdded,
  } = checkbotStates;
  return (
    <>
      <div className="border border-gray-500 h-64 rounded-md p-2 overflow-y-auto bg-white">
        {checkbotResultFormat === CheckbotResultFormatEnum.Removed &&
          checkbotCompletionRemoved.map((diff: any, i: number) => (
            <span
              key={i}
              className={
                diff.removed
                  ? "text-red-500 underline font-semibold"
                  : "text-black"
              }
            >
              {diff.value}
            </span>
          ))}
        {checkbotResultFormat === CheckbotResultFormatEnum.Added &&
          checkbotCompletionAdded.map((diff: any, i: number) => (
            <span
              key={i}
              className={
                diff.added
                  ? "text-green-500 underline font-semibold"
                  : "text-black"
              }
            >
              {diff.value}
            </span>
          ))}
      </div>
      <div>*Go to No Diff to copy</div>
    </>
  );
};

export default CheckbotRemovedAndAddedBox;
