import { useContext, memo } from 'react'
import { TbLanguage, TbX } from 'react-icons/tb'
import NextButton from '@/common/components/NextButton'
import NextTextarea from '@/common/components/NextTextarea'
import { TranslateContext } from './TranslateContext'

const TranslateFirstLanguageTextarea = () => {
  const { translateStates, translateDispatch } = useContext(TranslateContext);

  return (
    <div className='relative mb-4'>
      <NextButton
        variant='outline'
        className='absolute top-1 right-2 lg:right-3 p-2 border-transparent'
        onClick={() => translateDispatch({ key: "firstLanguageText", value: "" })}
      >
        <TbX className='font-bold text-3xl' />
      </NextButton>
      <NextTextarea
        value={translateStates.firstLanguageText}
        className='border-gray-200 resize-none h-60 rounded-t-none pr-12'
        onChange={(e) => translateDispatch({ key: "firstLanguageText", value: e.target.value })}
      />
      <NextButton className='absolute bottom-4 right-2 lg:right-3 p-2'>
        <TbLanguage />
        <span>Translate</span>
      </NextButton>
    </div>
  )
}

export default memo(TranslateFirstLanguageTextarea)