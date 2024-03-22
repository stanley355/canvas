import { cn } from '@/common/lib/cn'
import { TbCopy } from 'react-icons/tb'
import { Button } from '@/common/components/ui/button'
import { copyToClipboard } from '@/common/lib/copyToClipboard'

interface IImageToTextResult {
  recognizedText: string
}

const ImageToTextResult = (props: IImageToTextResult) => {
  const { recognizedText } = props;
  return (
    <div className={cn('pb-2 border-b h-60 lg:border lg:rounded-md', recognizedText ? 'block' : "hidden lg:block")}>
      <div className='p-2 mb-2 overflow-y-scroll text-sm h-4/5'>{recognizedText ? recognizedText : "Upload image to convert"}</div>
      <Button className='float-right gap-1 mr-2' onClick={() => copyToClipboard(recognizedText)}>
        <TbCopy />
        <span>Copy</span>
      </Button>
    </div>
  )
}

export default ImageToTextResult