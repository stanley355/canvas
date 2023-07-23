import React from 'react';
import { IPrompt } from '@/pages/document/translate/[id]';
import Button from '@/common/components/Button';
import { FaCross, FaTimesCircle } from 'react-icons/fa';

interface ITranslateRowEditor {
  index: number;
  // prompt: IPrompt
}

const TranslateRowEditor = (props: ITranslateRowEditor) => {
  const { index } = props;

  return (
    <div className='w-full h-2/5 border-t border-gray-500 absolute bottom-0 left-0 px-4 py-2 text-black bg-blue-900 z-5 rounded-t-lg'>
      <Button type='button' wrapperClassName='ml-[98%] p-2' buttonClassName='w-full h-full'>
        <FaTimesCircle className='text-3xl text-white' />
      </Button>
      <div className='bg-white h-[85%]'>
        <div className='flex items-center font-semibold'>
          <div className='w-[5%] border border-gray-500 text-center p-2'>No</div>
          <div className='w-[40%] border border-gray-500 p-2 text-center'>Source Text</div>
          <div className='w-[40%] border border-gray-500 p-2 text-center'>Translate Text </div>
          <div className='w-[15%] border border-gray-500 p-2 text-center'>Actions</div>
        </div>
        <div className='flex items-center h-[86%]'>
          <div className='w-[5%] border border-gray-500 h-full text-center'>3</div>
          <label htmlFor="" className='w-[40%] border border-gray-500 h-full'>
            <textarea name="" id="" value={"wek"} className='p-4 w-full h-full' />
          </label>
          <label htmlFor="" className='w-[40%] border border-gray-500 h-full'>
            <textarea name="" id="" value={"wow"}  className='p-4 w-full h-full'/>
          </label>
          <div className='w-[15%] p-4 border border-gray-500 h-full'>test</div>
        </div>
      </div>
    </div>
  )
};

export default TranslateRowEditor;