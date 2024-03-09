import { useRef } from 'react'
import { Button } from '@/common/components/ui/button'
import { Textarea } from '@/common/components/ui/textarea'
import { useTranslateV2 } from '../lib/useTranslateV2'
import TranslateSourceTextareaBtn from './TranslateSourceTextareaBtn'

const TranslateSourceTextareaMobile = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText, translatedText } = translateStates;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "SET",
      name: "sourceText",
      value: e.target.value
    });

    const target = textareaRef?.current as HTMLTextAreaElement;
    target.style.height = "25vh";
    target.style.height = target.scrollHeight + "px";
    return;
  }


  return (
    <div className='pb-2 border'>
      <Textarea
        placeholder='Enter Text'
        ref={textareaRef}
        onChange={handleChange}
        value={sourceText}
        className="h-auto min-h-[25vh] overflow-hidden border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <div className='flex items-center justify-between px-2'>
        <div>{sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000</div>
        <TranslateSourceTextareaBtn />
      </div>
    </div>
  )
}

export default TranslateSourceTextareaMobile