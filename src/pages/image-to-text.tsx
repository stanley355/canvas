import { useState  } from 'react';
import { TbPhotoAi} from 'react-icons/tb';

import ImageToTextInput from '@/modules/image-to-text/components/ImageToTextInput';
import ImageToTextResult from '@/modules/image-to-text/components/ImageToTextResult';

const ImageToText = () => {
  const [recognizedText, setRecognizedText] = useState('');


  return (
    <div className='container px-0 mx-auto mt-16 lg:mt-4 lg:px-4'>
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbPhotoAi className="text-xl" />
        <span>Image to Text</span>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-8'>
        <ImageToTextInput dispatchRecognizedText={setRecognizedText} />
        <ImageToTextResult recognizedText={recognizedText} />
      </div>
    </div>
  )
}

export default ImageToText;