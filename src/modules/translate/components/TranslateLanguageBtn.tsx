import { useMemo, useState } from "react";
import NextButton from "@/common/components/NextButton";
import TranslateLanguageMenu from "./TranslateLanguageMenu";
import { ITranslateReducerAction } from "../lib/translateReducer";
import { TRANSLATE_COMMON_LANGUAGE_LIST } from "../lib/translateLanguageList";
import { cn } from "@/common/lib/cn";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

interface TranslateLanguageBtn {
  isFirstLanguage: boolean;
  language: string;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateLanguageBtn = (props: TranslateLanguageBtn) => {
  const { isFirstLanguage, language, translateDispatch } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const placeholder = useMemo(() => {
    if (language) return language;
    if (isFirstLanguage) return "Detect Language";
    return "Indonesian";
  }, [isFirstLanguage, language]);

  return (
    <div className="lg:w-full">
      <NextButton
        variant="none"
        className="w-full p-4 lg:hidden font-semibold"
        onClick={() => setOpenMenu(true)}
      >
        {placeholder}
      </NextButton>

      <div className="hidden lg:flex">
        <NextButton
          variant="none"
          className="p-4 font-semibold border-b border-brand-primary"
          onClick={() => translateDispatch({ key: isFirstLanguage ? "firstLanguage" : "secondLanguage", value: "" })}
        >
          {placeholder}
        </NextButton>
        {TRANSLATE_COMMON_LANGUAGE_LIST
          .filter((commonLanguage) => commonLanguage !== language)
          .map((listLanguage) =>
            <NextButton
              key={`common_${listLanguage}`}
              variant="none"
              className={cn("p-4", listLanguage === language && 'font-semibold border-b border-brand-primary')}
              onClick={() => translateDispatch({ key: isFirstLanguage ? "firstLanguage" : "secondLanguage", value: listLanguage })}
            >
              {listLanguage}
            </NextButton>
          )}
        <NextButton
          variant="none"
          className="p-4"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <TbChevronUp /> : <TbChevronDown />}
        </NextButton>
      </div>

      {openMenu && (
        <TranslateLanguageMenu
          isFirstLanguage={isFirstLanguage}
          language={language}
          onCloseClick={() => setOpenMenu(false)}
          translateDispatch={translateDispatch}
        />
      )}
    </div>
  );
};

export default TranslateLanguageBtn;
