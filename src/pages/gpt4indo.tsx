import Button from '@/common/components/Button';
import PromptForm from '@/modules/gpt4indo/components/PromptForm';
import React from 'react';
import { FaArrowCircleRight, FaChevronCircleRight } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

const GPT4Indo = () => {

  const SystemIntro = () => (
    <div className='flex items-center gap-2 bg-gray-700 p-2 text-white lg:justify-center'>
    <div className='text-xl'>
      <SiOpenai />
    </div>
    <div>
      Halo, bagaimana saya bisa membantu Anda?
    </div>
  </div>
  );

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
      <div className='h-screen lg:col-span-1 border hidden lg:block'>
        hi
      </div>
      <div className='h-screen bg-white text-black lg:col-span-4 relative'>
        <div className='text-center bg-black p-2 text-white lg:hidden'>
          GPT4Indo
        </div>
        <div className='h-[95%]'>
          <div className='h-[90%] overflow-y-auto'>
            <SystemIntro />
          </div>
          <PromptForm />
        </div>
      </div>
    </div>
  )
};

export default GPT4Indo;