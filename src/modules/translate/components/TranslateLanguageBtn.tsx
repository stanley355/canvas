import NextButton from '@/common/components/NextButton'
import React from 'react'
import { MdAutoAwesome } from 'react-icons/md'
import TranslateLanguageMenu from './TranslateLanguageMenu'

const TranslateLanguageBtn = () => {
  return (
    <div>
      <NextButton variant='none' className='w-full p-4'>
        <MdAutoAwesome className='hidden' />
        <span>Detect Language</span>
      </NextButton>

      <TranslateLanguageMenu />
    </div>
  )
}

export default TranslateLanguageBtn