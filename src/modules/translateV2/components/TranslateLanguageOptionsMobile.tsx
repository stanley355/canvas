import { MdAutoAwesome } from "react-icons/md";
import { Button } from "@/common/components/ui/button";
import {
  TRANSLATE_LANGUAGE_LIST_COMMON,
  TRANSLATE_LANGUAGE_LIST_V2,
} from "../lib/constant";
import TranslateLanguageOptionsSearchMobile from "./TranslateLanguageOptionsSearchMobile";
import { useCallback, useState } from "react";
import { useTranslateV2 } from "../lib/useTranslateV2";

interface ITranslateLanguageOptionsMobile {
  isSource: boolean;
  title: string;
  onCloseClick: () => void;
}

interface IOption {
  label: string;
  value: string;
}

const TranslateLanguageOptionsMobile = (
  props: ITranslateLanguageOptionsMobile
) => {
  const { title, onCloseClick, isSource } = props;
  const { dispatch } = useTranslateV2();

  const [languageList, setLanguageList] = useState(TRANSLATE_LANGUAGE_LIST_V2);
  const handleSearch = (text: string) => {
    if (text) {
      const newList = TRANSLATE_LANGUAGE_LIST_V2.filter((option: IOption) =>
        option.label.toLowerCase().includes(text.toLowerCase())
      );
      setLanguageList(newList);
      return;
    }

    setLanguageList(TRANSLATE_LANGUAGE_LIST_V2);
    return;
  };

  const handleDetectLanguage = () => {
    dispatch({
      type: "SET",
      name: "sourceLanguage",
      value: { label: "Detect Language", value: "" },
    });
    onCloseClick();
    return;
  };

  const handleOptionClick = (option: IOption) => {
    dispatch({
      type: "SET",
      name: isSource ? "sourceLanguage" : "targetLanguage",
      value: option,
    });
    onCloseClick();
    return;
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll bg-white">
      <TranslateLanguageOptionsSearchMobile
        title={title}
        onCloseClick={onCloseClick}
        onChange={handleSearch}
      />

      {isSource && (
        <Button
          onClick={handleDetectLanguage}
          variant={"secondary"}
          className="flex items-center justify-start w-full border-b pl-[15%] gap-2 py-6"
        >
          <span>Detect Language</span>
          <MdAutoAwesome className="text-xl" />
        </Button>
      )}

      {languageList.length === TRANSLATE_LANGUAGE_LIST_V2.length && (
        <div className="border-b">
          <div className="p-4 font-semibold">Common Languages</div>
          {TRANSLATE_LANGUAGE_LIST_COMMON.map((option: IOption) => (
            <Button
              key={option.label}
              variant={"ghost"}
              className="flex items-center justify-start w-full  pl-[15%] gap-2 py-6"
              onClick={() => handleOptionClick(option)}
            >
              <span>{option.label}</span>
            </Button>
          ))}
        </div>
      )}

      <div className="border-b">
        <div className="p-4 font-semibold">All Languages</div>
        {languageList.map((option: IOption) => (
          <Button
            key={option.label}
            variant={"ghost"}
            className="flex items-center justify-start w-full  pl-[15%] gap-2 py-6"
            onClick={() => handleOptionClick(option)}
          >
            <span>{option.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TranslateLanguageOptionsMobile;
