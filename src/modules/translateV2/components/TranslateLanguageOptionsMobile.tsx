import { MdAutoAwesome } from "react-icons/md";
import { Button } from '@/common/components/ui/button'
import { TRANSLATE_LANGUAGE_LIST_COMMON, TRANSLATE_LANGUAGE_LIST_V2 } from '../lib/constant';
import TranslateLanguageOptionsSearchMobile from './TranslateLanguageOptionsSearchMobile';

interface ITranslateLanguageOptionsMobile {
  title: string;
  onCloseClick: () => void;
}

interface IOption {
  label: string;
  value: string;
}

const TranslateLanguageOptionsMobile = (props: ITranslateLanguageOptionsMobile) => {
  const { title, onCloseClick } = props;

  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll bg-white'>
      <TranslateLanguageOptionsSearchMobile title={title} onCloseClick={onCloseClick} />

      <Button variant={'secondary'} className='flex items-center justify-start w-full border-b pl-[15%] gap-2 py-6'>
        <span>Detect Language</span>
        <MdAutoAwesome className='text-xl' />
      </Button>

      <div className='border-b'>
        <div className='p-4 font-semibold'>Common Languages</div>
        {TRANSLATE_LANGUAGE_LIST_COMMON.map((option: IOption) =>
          <Button variant={'ghost'} className='flex items-center justify-start w-full  pl-[15%] gap-2 py-6'>
            <span>{option.label}</span>
          </Button>
        )}
      </div>
      <div className='border-b'>
        <div className='p-4 font-semibold'>All Languages</div>
        {TRANSLATE_LANGUAGE_LIST_V2.map((option: IOption) =>
          <Button variant={'ghost'} className='flex items-center justify-start w-full  pl-[15%] gap-2 py-6'>
            <span>{option.label}</span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default TranslateLanguageOptionsMobile