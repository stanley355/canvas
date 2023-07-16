import Button from '@/common/components/Button';
import React from 'react';
import Select from 'react-select';

const NewDocForm = () => {
  return (
    <div className='p-2 border rounded border-gray-500'>
      <div className='text-center text-xl mb-4 font-semibold'>New Document</div>
      <form action="" >
        <div className='mb-4'>
          <label htmlFor="name_input">Document Name: </label>
          <input type="text" id='name_input' name='name' className='border rounded p-2 w-full' placeholder='Doc xyz' />
        </div>

        <div className='mb-4'>
          <label htmlFor="doc_type_select">Document Type</label>
          <Select placeholder="What this document is for?" id='doc_type_select' name='doc_type' />
        </div>

        <Button type='button' title='submit' wrapperClassName='w-full bg-blue-900 text-white p-2 rounded font-semibold' buttonClassName='w-full h-full' />
      </form>
    </div>
  )
};

export default NewDocForm;