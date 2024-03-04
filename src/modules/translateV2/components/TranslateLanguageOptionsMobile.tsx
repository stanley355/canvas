import { Button } from '@/common/components/ui/button'
import { Input } from '@/common/components/ui/input';
import { cn } from '@/common/lib/cn';
import React, { useState } from 'react'
import { TbArrowLeft, TbSearch } from 'react-icons/tb'
import TranslateLanguageOptionsSearchMobile from './TranslateLanguageOptionsSearchMobile';

interface ITranslateLanguageOptionsMobile {
  title: string;
  onCloseClick: () => void;
}

const TranslateLanguageOptionsMobile = (props: ITranslateLanguageOptionsMobile) => {
  const { title, onCloseClick } = props;

  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-white '>
      <TranslateLanguageOptionsSearchMobile title={title} onCloseClick={onCloseClick} />
    </div>
  )
}

export default TranslateLanguageOptionsMobile