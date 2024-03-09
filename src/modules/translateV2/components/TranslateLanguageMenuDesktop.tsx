import { Button } from '@/common/components/ui/button'
import React, { useMemo } from 'react'
import { useTranslateV2 } from '../lib/useTranslateV2'
import { TRANSLATE_LANGUAGE_LIST_COMMON } from '../lib/constant';
import { TbArrowRight, TbChevronDown } from 'react-icons/tb';
import { cn } from '@/common/lib/cn';
import TranslateLanguageOptionsDesktop from './TranslateLanguageOptionsDesktop';
import TranslateLanguageMenuDesktopBtn from './TranslateLanguageMenuDesktopBtn';

const TranslateLanguageMenuDesktop = () => {
  

  return (
    <div className='relative border border-black'>
      <TranslateLanguageMenuDesktopBtn />
      {/* <TranslateLanguageOptionsDesktop /> */}
    </div>
  )
}

export default TranslateLanguageMenuDesktop