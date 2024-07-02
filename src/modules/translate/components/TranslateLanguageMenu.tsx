import { ChangeEvent, useState } from "react"
import { MdAutoAwesome } from "react-icons/md"
import { TbArrowLeft, TbSearch } from "react-icons/tb"

import NextButton from "@/common/components/NextButton"
import NextInput from "@/common/components/NextInput"
import { TRANSLATE_COMMON_LANGUAGE_LIST, TRANSLATE_LANGUAGE_LIST } from "../lib/translateLanguageList"
import { ITranslateReducerAction } from "../lib/translateReducer"
import { cn } from "@/common/lib/cn"

interface TranslateLanguageMenuProps {
  isFirstLanguage: boolean;
  onCloseClick: () => void;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateLanguageMenu = (props: TranslateLanguageMenuProps) => {
  const { isFirstLanguage, onCloseClick, translateDispatch } = props;
  const [langList, setLangList] = useState(TRANSLATE_LANGUAGE_LIST);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = TRANSLATE_LANGUAGE_LIST.filter((language) => language.toLowerCase().includes(e.target.value.toLowerCase()));
    setLangList(newList);
    return;
  }

  const handleClick = (language?: string) => {
    translateDispatch({ key: isFirstLanguage ? "firstLanguage" : "secondLanguage", value: language ? language : "" });
    onCloseClick()
    return;
  }

  return (
    <div className="fixed top-0 left-0 bg-white z-50 border border-red-50 w-full overflow-y-scroll h-screen">
      <div className="flex items-center border-b">
        <NextButton variant="none" className="p-4" onClick={onCloseClick}>
          <TbArrowLeft className="text-2xl" />
        </NextButton>
        <NextInput autoFocus className="py-4 rounded-none border-none" placeholder="Search language" onChange={onSearch} />
        <NextButton variant="none" className="p-4">
          <TbSearch className="text-2xl" />
        </NextButton>
      </div>

      <div className={langList.length === TRANSLATE_LANGUAGE_LIST.length ? "block" : "hidden"}>
        {isFirstLanguage && <NextButton
          variant="none"
          onClick={() => handleClick()}
          className="w-full rounded-none border-x-none border-t-none p-4 text-left border-b text-sm pl-8 flex gap-2 items-center"
        >
          <MdAutoAwesome />
          <span>Detect Language</span>
        </NextButton>}

        <div className="font-semibold p-4">
          Common Languages
        </div>
        <div>
          {TRANSLATE_COMMON_LANGUAGE_LIST.map((language) =>
            <NextButton variant="none" className="w-full rounded-none border-x-none border-t-none p-4 text-left border-b text-sm pl-8"
              onClick={() => handleClick(language)} >
              {language}
            </NextButton>
          )}
        </div>
      </div>

      <div className="font-semibold p-4">
        All Languages
      </div>
      <div>
        {langList.map((language) =>
          <NextButton variant="none" className="w-full rounded-none border-x-none border-t-none p-4 text-left border-b text-sm pl-8"
            onClick={() => handleClick(language)}
          >
            {language}
          </NextButton>
        )}
      </div>
    </div>
  )
}

export default TranslateLanguageMenu