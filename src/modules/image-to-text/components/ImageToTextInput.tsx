import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { TbPhotoAi, TbUpload } from 'react-icons/tb';
import Tesseract from 'tesseract.js';
import Cookies from 'js-cookie';
import { JwtPayload, decode } from 'jsonwebtoken';

import { cn } from '@/common/lib/cn';
import { sendFirebaseEvent } from '@/common/lib/firebase/sendFirebaseEvent';
import { fetchNewImageToTextPrompt } from '@/common/lib/api/prompts/fetchImageToTextPrompt';
import { IAxiosErrorRes } from '@/common/lib/api/axiosErrorHandler';
import { IPrompt } from '@/common/lib/api/prompts/interfaces';
import { fetchNewImageToTextPromptUpdate } from '@/common/lib/api/prompts/fetchImageToTextPromptUpdate';

interface IImageToTextInput {
  recognizedText: string;
  dispatchRecognizedText: (text: string) => void;
}

const LoginModal = dynamic(() => import('../../login/components/LoginModal'), { ssr: false });
const ExceedLimitModal = dynamic(() => import("../../../common/components/ExceedLimitModal"), { ssr: false });

const ImageToTextInput = (props: IImageToTextInput) => {
  const { dispatchRecognizedText, recognizedText } = props;
  const fileInput = useRef<any>(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("-");
  const [recognizeProgress, setRecognizeProgress] = useState(0);

  const isLoading = useMemo(() => {
    return recognizeProgress !== 0 && recognizeProgress !== 100
  }, [recognizeProgress]);

  const recognizeText = async (imageUrl: string) => {
    try {
      const result = await Tesseract.recognize(imageUrl, undefined, {
        logger: (log) => setRecognizeProgress(Math.round(log.progress * 100))
      });

      dispatchRecognizedText(result.data.text);
      return;
    } catch (error) {
      toast.error("Fail to convert, please try again");
      return;
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const token = Cookies.get("token");
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    sendFirebaseEvent("image_to_text");

    const user = decode(token) as JwtPayload;
    const imagePromptRes: IPrompt & IAxiosErrorRes = await fetchNewImageToTextPrompt(user.id);

    if (imagePromptRes.status && imagePromptRes.status === 400) {
      if (imagePromptRes?.data?.status === 600) {
        setShowLimitModal(true);
        return;
      }
    }

    if (imagePromptRes.id) {
      const target = event.target as any;
      const image = target.files[0];
      setImageName(image.name);

      const imageUrl = URL.createObjectURL(image)
      setImageUrl(imageUrl);
      recognizeText(imageUrl);

      const payload = {
        userID: user.id,
        promptID: imagePromptRes.id,
        completionText: recognizedText
      }
      await fetchNewImageToTextPromptUpdate(payload);
      return;
    }

    toast.info("Server busy, please try again");
    return;
  };

  return (
    <div>
      <input type="file" name="file" id="file_input" ref={fileInput} className='hidden' accept=".jpeg,.jpg, .png, .webp " onChange={handleImageUpload} />
      <button type='button' disabled={isLoading} className='w-full pb-4 mt-4 lg:mt-0 h-1/4 border-y lg:border lg:rounded-md lg:h-60 lg:pb-2' onClick={() => fileInput.current.click()}>
        {imageUrl ? <Image className='w-full h-40 lg:h-44 lg:rounded-t-md' src={imageUrl} width={350} height={350} alt='Uploaded Image' /> : <TbPhotoAi className='w-full text-[10rem] text-blue-700 h-40' />}
        <div className='flex items-center justify-between px-2 mt-4'>
          <div className='w-1/2 text-sm text-left text-ellipsis'>
            <div className='text-gray-500'>{isLoading ? `Converting` : "File Name:"}</div>
            <div className='w-full overflow-hidden text-sm font-semibold whitespace-nowrap text-ellipsis'>{isLoading ? `${recognizeProgress}%` : imageName}</div>
          </div>
          <div className={cn('flex items-center w-1/4 lg:w-fit gap-1 p-2 text-white border rounded-md ', isLoading ? 'bg-gray-500' : "bg-emerald-700 hover:bg-emerald-600")}>
            <TbUpload />
            <span>Upload</span>
          </div>
        </div>
      </button>
      {showLoginModal && <LoginModal />}
      {showLimitModal && <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />}
    </div>
  )
}

export default ImageToTextInput