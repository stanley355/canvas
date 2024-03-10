import { useRef } from "react";
import { Textarea } from "@/common/components/ui/textarea";
import { useTranslateV2 } from "../lib/useTranslateV2";
import TranslateSourceTextareaBtn from "./TranslateSourceTextareaBtn";

const TranslateSourceTextareaMobile = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText } = translateStates;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "SET",
      name: "sourceText",
      value: e.target.value,
    });

    return;
  };

  return (
    <div className="pb-2 border">
      <Textarea
        placeholder="Enter Text"
        onChange={handleChange}
        value={sourceText}
        className="h-[25vh] overflow-scroll border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <div className="flex items-center justify-between px-2">
        <div className="text-xs">
          {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
        </div>
        <TranslateSourceTextareaBtn />
      </div>
    </div>
  );
};

export default TranslateSourceTextareaMobile;
