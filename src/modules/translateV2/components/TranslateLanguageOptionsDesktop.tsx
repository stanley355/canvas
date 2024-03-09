import { ChangeEvent, useState } from 'react';
import { TbArrowLeft, TbSearch } from "react-icons/tb";
import { MdAutoAwesome } from 'react-icons/md';
import { Button } from '@/common/components/ui/button'
import { Input } from '@/common/components/ui/input';

import { TRANSLATE_LANGUAGE_LIST_V2 } from '../lib/constant';
import { useTranslateV2 } from '../lib/useTranslateV2';
import { cn } from '@/common/lib/cn';
import { TRANSLATE_STATES_V2 } from '../lib/translateStatesV2';

interface ITranslateLanguageOptionsDesktop {
  isSource: boolean;
  searchPlaceholder: string;
  onCloseClick: () => void;
}

const TranslateLanguageOptionsDesktop = (props: ITranslateLanguageOptionsDesktop) => {
  const { isSource, searchPlaceholder, onCloseClick } = props;
  const { translateStates, dispatch } = useTranslateV2();
  const { targetLanguage, sourceLanguage } = translateStates;

  const [langList, setLangList] = useState(TRANSLATE_LANGUAGE_LIST_V2);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const newList = TRANSLATE_LANGUAGE_LIST_V2.filter((lang: { label: string, value: string }) => lang.label.includes(e.target.value));
      setLangList(newList);
      return
    };

    setLangList(TRANSLATE_LANGUAGE_LIST_V2);
    return;
  }



  return (
    <div className='absolute left-0 w-full overflow-hidden bg-white border rounded-lg top-10 h-72'>
      <div className="grid grid-cols-[5%_90%_5%] border w-full">
        <Button variant={"ghost"} onClick={onCloseClick}>
          <TbArrowLeft className="text-2xl" />
        </Button>
        <Input
          placeholder={searchPlaceholder}
          autoFocus
          className="border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          onChange={handleSearch}
        />

        <Button variant={"ghost"} >
          <TbSearch className="text-2xl" />
        </Button>
      </div>
      <div className='grid grid-cols-6'>
        {isSource && <Button variant={'ghost'}
          className='flex items-center gap-2'
          onClick={() => {
            dispatch({
              type: "SET",
              name: "sourceLanguage",
              value: TRANSLATE_STATES_V2.sourceLanguage
            })
            onCloseClick();
          }} >
          <span>Detect Language</span>
          <MdAutoAwesome className="text-xl" />
        </Button>}
        {langList.map((language: { label: string, value: string }) =>
          <Button variant={'ghost'}
            onClick={() => {
              dispatch({
                type: "SET",
                name: isSource ? "sourceLanguage" : 'targetLanguage',
                value: language
              })
              onCloseClick()
            }}
            className={cn(
              isSource && sourceLanguage.label === language.label ? "bg-blue-100 text-blue-800" : "",
              !isSource && targetLanguage.label === language.label ? "bg-blue-100 text-blue-800" : ""
            )} >{language.label}</Button>
        )}
      </div>
    </div>
  )
}

export default TranslateLanguageOptionsDesktop