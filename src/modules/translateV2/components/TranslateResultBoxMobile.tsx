import { Button } from '@/common/components/ui/button'
import React from 'react'
import { useTranslateV2 } from '../lib/useTranslateV2'
import { toast } from 'react-toastify';
import { cn } from '@/common/lib/cn';

const TranslateResultBoxMobile = () => {
  const { translateStates } = useTranslateV2();
  const { translatedText } = translateStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(translatedText);
    toast.info("Text copied to Clipboard");
  };

  return (
    <div className={cn('pb-2 bg-gray-100 border-b', translatedText ? "block" : "hidden")}>
      <div className='p-2'>{translatedText}</div>
      <Button className='ml-[82%]' onClick={copyText}>Copy</Button>
    </div>
  )
}

export default TranslateResultBoxMobile