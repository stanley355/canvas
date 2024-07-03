import { ChangeEvent, useState } from "react";
import { MdAutoAwesome } from "react-icons/md";
import { TbArrowLeft, TbSearch } from "react-icons/tb";

import NextButton from "@/common/components/NextButton";
import NextInput from "@/common/components/NextInput";
import {
  TRANSLATE_COMMON_LANGUAGE_LIST,
  TRANSLATE_LANGUAGE_LIST,
} from "../lib/translateLanguageList";
import { ITranslateReducerAction } from "../lib/translateReducer";
import { cn } from "@/common/lib/cn";

interface TranslateLanguageMenuProps {
  isFirstLanguage: boolean;
  language: string;
  onCloseClick: () => void;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateLanguageMenu = (props: TranslateLanguageMenuProps) => {
  const { isFirstLanguage, language, onCloseClick, translateDispatch } = props;
  const [langList, setLangList] = useState(TRANSLATE_LANGUAGE_LIST);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = TRANSLATE_LANGUAGE_LIST.filter((language) =>
      language.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLangList(newList);
    return;
  };

  const handleClick = (language?: string) => {
    translateDispatch({
      key: isFirstLanguage ? "firstLanguage" : "secondLanguage",
      value: language ? language : "",
    });
    onCloseClick();
    return;
  };

  return (
    <div className="fixed top-0 left-0 bg-white z-10 lg:absolute lg:top-14 border lg:rounded-lg w-full overflow-y-scroll h-screen lg:h-fit">
      <div className="flex items-center border-b">
        <NextButton variant="none" className="p-4" onClick={onCloseClick}>
          <TbArrowLeft className="text-2xl" />
        </NextButton>
        <NextInput
          autoFocus
          className="py-4 rounded-none border-none"
          placeholder="Search language"
          onChange={onSearch}
        />
        <NextButton variant="none" className="p-4">
          <TbSearch className="text-2xl" />
        </NextButton>
      </div>

      <div
        className={cn(
          langList.length === TRANSLATE_LANGUAGE_LIST.length
            ? "block"
            : "hidden", 'lg:hidden'
        )}
      >
        {isFirstLanguage && (
          <NextButton
            variant="none"
            onClick={() => handleClick()}
            className={cn(
              "w-full rounded-none border-x-none border-t-none p-4 text-left border-b text-sm pl-8 flex gap-2 items-center",
              language === "" && 'font-semibold bg-blue-100'
            )}

          >
            <MdAutoAwesome />
            <span>Detect Language</span>
          </NextButton>
        )}

        <div className="font-semibold p-4">Common Languages</div>
        <div>
          {TRANSLATE_COMMON_LANGUAGE_LIST.map((listLanguage) => (
            <NextButton
              key={`common_${listLanguage}`}
              variant="none"
              onClick={() => handleClick(listLanguage)}
              className={cn("w-full rounded-none border-x-none border-t-none p-4 text-left border-b text-sm pl-8",
                language === listLanguage && 'font-semibold bg-blue-100'

              )}
            >
              {listLanguage}
            </NextButton>
          ))}
        </div>
      </div>

      <div className="font-semibold p-4 lg:hidden">All Languages</div>
      <div className="lg:grid lg:grid-cols-8">
        {isFirstLanguage && (
          <NextButton
            variant="none"
            onClick={() => handleClick()}
            className={cn(
              "w-full rounded-none p-4 text-left hover:bg-blue-100 text-sm pl-8 gap-2 lg:px-2 items-center hidden lg:flex",
              language === "" && 'font-semibold bg-blue-100'
            )}
          >
            <MdAutoAwesome />
            <span>Detect Language</span>
          </NextButton>
        )}
        {langList.map((listLanguage) => (
          <NextButton
            key={listLanguage}
            variant="none"
            className={cn(
              "w-full rounded-none border-x-none border-t-none p-4 text-left border-b lg:border-none text-sm pl-8 hover:bg-blue-100 lg:px-2 lg:text-center",
              language === listLanguage && 'font-semibold bg-blue-100'
            )}
            onClick={() => handleClick(listLanguage)}
          >
            {listLanguage}
          </NextButton>
        ))}
      </div>
    </div>
  );
};

export default TranslateLanguageMenu;
