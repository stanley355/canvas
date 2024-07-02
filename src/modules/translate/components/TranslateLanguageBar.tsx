import NextButton from '@/common/components/NextButton'
import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import TranslateLanguageBtn from './TranslateLanguageBtn'

const TranslateLanguageBar = () => {
  return (
    <div className="grid grid-cols-[42.5%_15%_42.5%] w-full place-items-center border-b border-b-brand-primary">
      <TranslateLanguageBtn />
      <TbArrowRight />
      <TranslateLanguageBtn />
    </div>
  )
}

export default TranslateLanguageBar