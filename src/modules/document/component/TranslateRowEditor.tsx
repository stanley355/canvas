import React from 'react';
import { IPrompt } from '@/pages/document/translate/[id]';
import Button from '@/common/components/Button';

interface ITranslateRowEditor {
  index: number;
  // prompt: IPrompt
}

const TranslateRowEditor = (props: ITranslateRowEditor) => {
  const { index } = props;

  return (
    <div className='w-full h-2/5 border-t border-gray-500 absolute bottom-0 left-0 px-4 text-black bg-blue-900 z-5'>
      <Button type='button' title='X Close' wrapperClassName='ml-[95%]' buttonClassName='w-full h-full' />
      <div className='flex items-center'>
        <div className='w-[5%] border border-gray-500 text-center p-2 font-semibold'>No</div>
        <div className='w-[40%] border border-gray-500 p-2 text-center font-semibold'>Source Text</div>
        <div className='w-[40%] border border-gray-500 p-2 text-center font-semibold'>Translate Text </div>
        <div className='w-[15%] border border-gray-500 p-2 text-center font-semibold'>Actions</div>
      </div>
      <div className='flex items-center'>
        <div className='w-[5%] border border-gray-500 h-full text-center p-4'>3</div>
        <label htmlFor="" className='w-[40%] border border-gray-500 h-full'>
          <textarea name="" id="" value={"wek"} className='p-4 w-full h-full' />
        </label>
        <label htmlFor="" className='w-[40%]'>
          <textarea name="" id="" value={"wow"} />
        </label>
        <div className='w-[15%]'>test</div>
      </div>
    </div>
  )
};

export default TranslateRowEditor;