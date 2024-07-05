import { memo } from "react";
import { TbX } from "react-icons/tb";

import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";
import { ITranslateReducerAction } from "../lib/translateReducer";
import TranslateSubmitBtn from "./TranslateSubmitBtn";

interface TranslateFirstLanguageTextareaProps {
  firstLanguageText: string;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateFirstLanguageTextarea = (
  props: TranslateFirstLanguageTextareaProps
) => {
  const { firstLanguageText, translateDispatch } = props;

  return (
    <div className="relative mb-4">
      <NextButton
        variant="none"
        className="absolute top-0 right-0 p-2 border border-l-transparent border-b-transparent rounded-lg  hover:border hover:bg-blue-100"
        onClick={() =>
          translateDispatch({ key: "firstLanguageText", value: "" })
        }
      >
        <TbX className="font-bold text-3xl" />
      </NextButton>
      <NextTextarea
        autoFocus
        value={firstLanguageText}
        className="border-base resize-none h-60 pr-12 focus:border-base hover:border-base"
        onChange={(e) =>
          translateDispatch({ key: "firstLanguageText", value: e.target.value })
        }
      />
      <TranslateSubmitBtn />
    </div>
  );
};

export default memo(TranslateFirstLanguageTextarea);
