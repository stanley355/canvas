import { useContext, memo } from "react";
import { TbLanguage, TbX } from "react-icons/tb";
import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";
import { TranslateContext } from "./TranslateContext";
import { ITranslateReducerAction } from "../lib/translateReducer";
import Cookies from "js-cookie";
import { AppContext } from "@/modules/app/components/AppContext";

interface TranslateFirstLanguageTextareaProps {
  firstLanguageText: string;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateFirstLanguageTextarea = (
  props: TranslateFirstLanguageTextareaProps
) => {
  const { firstLanguageText, translateDispatch } = props;
  const { appDispatch } = useContext(AppContext)

  const handleClick = async () => {
    const token = Cookies.get('token');

    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }
  }

  return (
    <div className="relative mb-4">
      <NextButton
        variant="outline"
        className="absolute top-1 right-2 lg:right-3 p-2 border-transparent"
        onClick={() =>
          translateDispatch({ key: "firstLanguageText", value: "" })
        }
      >
        <TbX className="font-bold text-3xl" />
      </NextButton>
      <NextTextarea
        value={firstLanguageText}
        className="border-gray-200 resize-none h-60 pr-12 focus:border-gray-200 hover:border-gray-200"
        onChange={(e) =>
          translateDispatch({ key: "firstLanguageText", value: e.target.value })
        }
      />
      <NextButton
        onClick={handleClick}
        className="absolute bottom-4 right-2 lg:right-3 p-2"
      >
        <TbLanguage />
        <span>Translate</span>
      </NextButton>
    </div>
  );
};

export default memo(TranslateFirstLanguageTextarea);
