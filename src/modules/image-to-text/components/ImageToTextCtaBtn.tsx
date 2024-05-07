import { TbUpload } from 'react-icons/tb';
import { cn } from '@/common/lib/cn';

interface IImageToTextCtaBtn {
  isLoading: boolean;
  recognizeProgress: number;
  imageName: string
}

const ImageToTextCtaBtn = (props: IImageToTextCtaBtn) => {
  const { isLoading, recognizeProgress, imageName } = props;
  return (
    <div className="flex items-center justify-between px-2 mt-4">
      <div className="w-1/2 text-sm text-left text-ellipsis">
        <div className="text-gray-500">
          {isLoading ? `Converting` : "File Name:"}
        </div>
        <div className="w-full overflow-hidden text-sm font-semibold whitespace-nowrap text-ellipsis">
          {isLoading ? `${recognizeProgress}%` : imageName}
        </div>
      </div>
      <div
        className={cn(
          "flex items-center w-1/4 lg:w-fit gap-1 p-2 text-white border rounded-md ",
          isLoading ? "bg-gray-500" : "bg-emerald-700 hover:bg-emerald-600"
        )}
      >
        <TbUpload />
        <span>Upload</span>
      </div>
    </div>
  )
}

export default ImageToTextCtaBtn