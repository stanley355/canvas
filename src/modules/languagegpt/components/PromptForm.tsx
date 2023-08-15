import Button from '@/common/components/Button';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const PromptForm = () => {
  return (
    <div className='absolute top-[83vh] lg:top-[85vh] left-0 w-full'>
      <form onClick={(e) => e.preventDefault()} className='flex items-center bg-black rounded  w-full  lg:w-2/3 lg:mx-auto border border-white'>
        <label htmlFor="prompt" className='p-2 w-5/6'>
          <textarea name='prompt' id='prompt' placeholder="Translate 'Bagaimana harimu?' to English" className='w-full rounded-md p-1 resize-none' />
        </label>

        <Button type='submit' wrapperClassName='w-1/6 h-full text-white text-2xl' buttonClassName='w-full h-full flex items-center justify-center'>
          <FaAngleDoubleRight />
        </Button>
      </form>
    </div>
  )
};

export default PromptForm;