import { Button } from '@/common/components/ui/button'
import React, { useMemo } from 'react'
import { useTranslateV2 } from '../lib/useTranslateV2'
import { TRANSLATE_LANGUAGE_LIST_COMMON } from '../lib/constant';
import { TbArrowRight, TbChevronDown } from 'react-icons/tb';
import { cn } from '@/common/lib/cn';

const TranslateLanguageMenuDesktop = () => {
  const { translateStates } = useTranslateV2();
  const { sourceLanguage, targetLanguage } = translateStates;

  const inCommonLanguage = useMemo(() => {
    const commonLanguage = TRANSLATE_LANGUAGE_LIST_COMMON.map((language: any) => language.label);
    return commonLanguage.includes(targetLanguage.label);
  }, [targetLanguage]);

  return (
    <div className='grid grid-cols-[47.5%_5%_47.5%]'>
      <div className='flex items-center'>
        <Button variant={'ghost'} className='text-blue-800 border-b-2 rounded-none border-b-blue-800'>{sourceLanguage.label}</Button>
        {TRANSLATE_LANGUAGE_LIST_COMMON.map((language: { label: string, value: string }) =>
          <Button variant={'ghost'} className={cn(sourceLanguage.label === language.label ? "text-blue-800 border-b-2 border-b-blue-800 rounded-none" : "")}>{language.label}</Button>
        )}
        <Button variant={'ghost'} className='text-xl rounded-full'>
          <TbChevronDown />
        </Button>
      </div>
      <div className='flex items-center'>
        <TbArrowRight />
      </div>
      <div className='flex items-center'>
        {!inCommonLanguage && <Button variant={'ghost'} className='text-blue-800 border-b-2 rounded-none border-b-blue-800'>{targetLanguage.label}</Button>}
        {TRANSLATE_LANGUAGE_LIST_COMMON.map((language: { label: string, value: string }) =>
          <Button variant={'ghost'} className={cn(targetLanguage.label === language.label ? "text-blue-800 border-b-2 border-b-blue-800 rounded-none" : "")}>{language.label}</Button>
        )}
        <Button variant={'ghost'} className='text-xl rounded-full'>
          <TbChevronDown />
        </Button>
      </div>
    </div>
  )
}

export default TranslateLanguageMenuDesktop