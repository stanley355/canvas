import { TbChevronDown, TbLanguage } from 'react-icons/tb'
import CanvasSelect, { IOption } from '@/common/components/ui/CanvasSelect'
import { useTranslateV2 } from '../lib/useTranslateV2'

const TranslateHeader = () => {
  const { dispatch } = useTranslateV2();

  return (
    <div className="flex items-center justify-between px-2 mt-20 mb-4 lg:justify-start">
      <div className="flex items-center gap-1 px-3 py-1 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbLanguage className="text-xl" />
        <span>Translate</span>
      </div>
      <CanvasSelect

        placeholder={
          <div className='flex items-center gap-1'>
            <span>Result Variant</span>
            <TbChevronDown />
          </div>
        }
        containerClassname='lg:hidden'
        selectClassname='border shadow min-w-[10rem]'
        optionContainerClassname='w-full shadow-lg'
        optionClassname='border-y'
        onChange={(option: IOption) => dispatch({ type: "SET", name: 'resultVariant', value: option.value })}
        options={[{ label: "1", value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }]}
      />
    </div>
  )
}

export default TranslateHeader