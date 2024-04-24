import { TbCopy } from "react-icons/tb";
import { toast } from "react-toastify";

import { Button } from "@/common/components/ui/button";
import GrammarCheckResultBoxDiffBtn from "./GrammarCheckResultBoxDiffBtn";
import { useGrammarCheck } from "../lib/useGrammarCheck";
import { useMemo } from "react";
import { GrammarCheckDiffs } from "../lib/grammarCheckStates";

const GrammarCheckResultBox = () => {
  const { grammarCheckStates } = useGrammarCheck();
  const { resultText, activeDiff, resultTextAdded, resultTextRemoved } =
    grammarCheckStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(resultText);
    toast.info("Text copied to Clipboard");
  };

  return (
    <div className="pb-2 mt-4 border-b lg:border-b-0">
      <GrammarCheckResultBoxDiffBtn />
      <div className="lg:border lg:pb-2 lg:rounded-md">
        <div className="p-2 text-sm h-[25vh] overflow-scroll">
          {activeDiff === GrammarCheckDiffs.Original && resultText}
          {activeDiff === GrammarCheckDiffs.Removed &&
            resultTextRemoved.map((diff: any, i: number) => (
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
          {activeDiff === GrammarCheckDiffs.Added &&
            resultTextRemoved.map((diff: any, i: number) => (
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

        <Button
          className="ml-[76%] lg:ml-[85%] flex items-center gap-2"
          onClick={copyText}
        >
          <TbCopy />
          <span>Copy</span>
        </Button>
      </div>
    </div>
  );
};

export default GrammarCheckResultBox;
