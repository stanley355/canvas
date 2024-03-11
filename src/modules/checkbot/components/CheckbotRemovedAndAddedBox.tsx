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
      <div className="h-64 p-2 overflow-y-auto bg-white border border-gray-500 rounded-md">
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
    </>
  );
};

export default CheckbotRemovedAndAddedBox;
