import { useContext, memo } from 'react'
import { TbCopy } from 'react-icons/tb'
import NextButton from '@/common/components/NextButton'
import NextTextarea from '@/common/components/NextTextarea'
import { TranslateContext } from './TranslateContext'
import { copyToClipboard } from '@/common/lib/copyToClipboard'

const TranslateSecondLanguageTextarea = () => {
  const { translateStates } = useContext(TranslateContext);

  if (translateStates.secondLanguageTexts.length > 0) {
    return translateStates.secondLanguageTexts.map((text, index) =>
      <div className='relative mb-4' key={`secondLanguageText_${index}`}>
        <NextTextarea
          readOnly
          value={text}
          className='border-gray-200 resize-none h-60 rounded-t-none pr-12'
        />
        <NextButton className='absolute bottom-4 right-2 lg:right-3 p-2' onClick={()=> copyToClipboard(text)}>
          <TbCopy />
          <span>Copy</span>
        </NextButton>
      </div>
    )
  }
  return (
    <div className='relative mb-4'>
      <NextTextarea
        readOnly
        className='border-gray-200 resize-none h-60 rounded-t-none pr-12 focus:border-gray-200'
      />
      <NextButton className='absolute bottom-4 right-2 lg:right-3 p-2'>
        <TbCopy />
        <span>Copy</span>
      </NextButton>
    </div>
  )
}

export default memo(TranslateSecondLanguageTextarea)