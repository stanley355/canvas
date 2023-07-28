import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import Button from '@/common/components/Button';

const PromptForm = () => {
  return (
    <form className='bg-gray-700 absolute left-0 bottom-0 w-full p-2 pb-4' onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <div className='w-full lg:w-2/3 rounded-md bg-white flex items-center lg:mx-auto'>
        <label htmlFor="" className='rounded-t rounded-lg w-[90%] lg:w-[95%]'>
          <textarea name="" id="" placeholder='Masukkan Instruksi Anda' className='w-full rounded p-1 bg-transparent outline-none resize-none overflow-y-auto' />
        </label>
        <Button type='submit' wrapperClassName='w-[10%] lg:w-[5%]' buttonClassName='w-full h-full'>
          <FaChevronCircleRight className='mx-auto text-2xl' />
        </Button>
      </div>
    </form>
  );
};

export default PromptForm;