import { useState, useRef } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { TbCopy, TbPhotoAi, TbUpload } from 'react-icons/tb';
import Tesseract from 'tesseract.js';

import { Button } from '@/common/components/ui/button';
import { copyToClipboard } from '@/common/lib/copyToClipboard';

const ImageToText = () => {
  const fileInput = useRef<any>(null);

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("-");

  const [recognizeProgress, setRecognizeProgress] = useState(0);
  const [recognizedText, setRecognizedText] = useState('');

  const recognizeText = async (imageUrl: string) => {
    try {
      const result = await Tesseract.recognize(imageUrl, undefined, {
        logger: (log) => setRecognizeProgress(Math.round(log.progress * 100))
      });
      setRecognizedText(result.data.text);
      return;
    } catch (error) {
      toast.error("Fail to convert, please try again");
      return;
    }

  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as any;
    const image = target.files[0];
    setImageName(image.name);
    const imageUrl = URL.createObjectURL(image)
    recognizeText(imageUrl);
    setImageUrl(imageUrl);
    return;
  };

  return (
    <div className='container px-0 mx-auto mt-16'>
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbPhotoAi className="text-xl" />
        <span>Image to Text</span>
      </div>

      <div>
        <input type="file" name="file" id="file_input" ref={fileInput} className='hidden' accept=".jpeg,.jpg, .png, .webp " onChange={handleImageUpload} />
        <button type='button' className='w-full pb-4 mt-4 h-1/4 border-y' onClick={() => fileInput.current.click()}>
          {imageUrl ? <Image className='w-full h-40' src={imageUrl} width={350} height={350} alt='Uploaded Image' /> : <TbPhotoAi className='w-full text-[10rem] text-blue-700 h-40' />}
          <div className='flex items-center justify-between px-2 mt-4'>
            <div className='w-1/2 text-sm text-left text-ellipsis'>
              <div className='text-gray-500'>{(recognizeProgress !== 0 && recognizeProgress !== 100) ? `Converting` : "File Name:"}</div>
              <div className='w-full overflow-hidden text-sm font-semibold whitespace-nowrap text-ellipsis'>{(recognizeProgress !== 0 && recognizeProgress !== 100) ? `${recognizeProgress}%` : imageName}</div>
            </div>
            <div className='flex items-center w-1/4 gap-1 p-2 text-white border rounded-md bg-emerald-700 hover:bg-emerald-600'>
              <TbUpload />
              <span>Upload</span>
            </div>
          </div>
        </button>
      </div>

      {recognizedText && <div className='h-64 pb-2 border-b'>
        <div className='p-2 mb-2 overflow-y-scroll text-sm h-4/5'>{recognizedText}</div>
        <Button className='float-right gap-1 mr-2' onClick={() => copyToClipboard(recognizedText)}>
          <TbCopy />
          <span>Copy</span>
        </Button>
      </div>}

    </div>
  )
}

export default ImageToText;