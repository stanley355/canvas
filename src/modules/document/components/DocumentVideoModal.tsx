import React from 'react'
import { useRouter } from 'next/router';
import { sendFirebaseEvent } from '@/common/lib/firebase/sendFirebaseEvent';

interface IDocumentVideoModal {
  onCloseClick: () => void;
}

const DocumentVideoModal = (props: IDocumentVideoModal) => {
  const { onCloseClick } = props;
  const router = useRouter();
  const videoURL = 'https://firebasestorage.googleapis.com/v0/b/canvas-d06f8.appspot.com/o/Screen%20Recording%202024-02-05%20at%2018.56.45.mov?alt=media&token=ff462f3d-7ef0-4d1b-a3f1-0ed14514b5db';

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-20'>
      <div className='bg-white p-4 rounded-md shadow-lg mt-[25%] lg:mt-[5%] lg:w-2/3 lg:mx-auto'>
        <video controls autoPlay>
          <source src={videoURL} type="video/mp4" />
        </video>
        <div className='text-center text-xl my-2 mt-4'><b>(NEW)</b>  Document Feature</div>
        <div className='text-center mb-4'>Simpan dan periksa teksmu dengan mudah di Language AI</div>
        <div className='w-full lg:flex lg:flex-row-reverse lg:items-center lg:gap-4'>
          <button type="button"
            onClick={() => {
              sendFirebaseEvent('document_video_popup_click')
              router.push("/document/")
            }}
            className='p-2 w-full bg-blue-900 text-white mb-4 lg:mb-0 rounded-md text-lg'
          >
            Coba Langsung
          </button>
          <button type="button" className='w-full p-2 lg:border lg:rounded-md' onClick={onCloseClick}>
            Nanti deh
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocumentVideoModal