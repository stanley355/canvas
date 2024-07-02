import { useMemo, useState } from 'react'
import NextButton from '@/common/components/NextButton'
import TranslateLanguageMenu from './TranslateLanguageMenu'
import { ITranslateReducerAction } from '../lib/translateReducer';

interface TranslateLanguageBtn {
  isFirstLanguage: boolean;
  language: string;
  translateDispatch: (action: ITranslateReducerAction) => void;
}

const TranslateLanguageBtn = (props: TranslateLanguageBtn) => {
  const { isFirstLanguage, language, translateDispatch } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const placeholder = useMemo(() => {
    if (language) return language;
    if (isFirstLanguage) return 'Detect Language';
    return 'Indonesia'
  }, [isFirstLanguage, language])

  return (
    <div>
      <NextButton variant='none' className='w-full p-4' onClick={() => setOpenMenu(true)}>
        {placeholder}
      </NextButton>

      {openMenu && <TranslateLanguageMenu
        isFirstLanguage={isFirstLanguage}
        onCloseClick={() => setOpenMenu(false)}
        translateDispatch={translateDispatch}
      />}
    </div>
  )
}

export default TranslateLanguageBtn