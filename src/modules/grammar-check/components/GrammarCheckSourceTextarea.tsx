import { ChangeEvent } from "react";
import { TbX } from "react-icons/tb";
import { Textarea } from "@/common/components/ui/textarea";
import { Button } from "@/common/components/ui/button";
import { useGrammarCheck } from "../lib/useGrammarCheck";
import GrammarCheckInstructionSelect from "./GrammarCheckInstructionSelect";
import GrammarCheckSourceTextareaBtn from "./GrammarCheckSourceTextareaBtn";

const GrammarCheckSourceTextarea = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { sourceText } = grammarCheckStates;

  return (
    <div>
      <GrammarCheckInstructionSelect />
      <div className="relative pb-2 border lg:rounded-md">
        <Button
          variant={"ghost"}
          className="absolute top-0 right-0"
          onClick={() => {
            dispatch({
              type: "SET",
              name: "sourceText",
              value: "",
            });
          }}
        >
          <TbX className="text-2xl" />
        </Button>
        <Textarea
          placeholder="Enter Text"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch({
              name: "sourceText",
              value: e.target.value,
            });
          }}
          value={sourceText}
          className="h-[25vh] overflow-scroll border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        <div className="flex items-center justify-between px-2">
          <div className="text-xs">
            {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
          </div>
          <GrammarCheckSourceTextareaBtn />
        </div>
      </div>
    </div>
  );
};

export default GrammarCheckSourceTextarea;
