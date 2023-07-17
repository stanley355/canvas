import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';

const NewDocForm = () => {
  const [showError, setShowError] = useState(false);


  const docTypeOptions = [
    {
      label: "Translate a document",
      value: "translate"
    },
    {
      label: "Check document's writing",
      value: "checkbot"
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const name = target.name.value;
    const docType = target.doc_type.value;

    setShowError(false);
    if (!name || !docType) {
      setShowError(true);
      return;
    }

    console.log(target.doc_type.value);
  }

  return (
    <div className='p-2 border rounded border-gray-500 lg:w-1/3 lg:mx-auto'>
      <div className='text-center text-xl mb-4 font-semibold'>New Document</div>
      <form onSubmit={handleSubmit} >
        <div className='mb-4'>
          <label htmlFor="name_input"> <span className='text-red-500'>*</span> Document Name: </label>
          <input type="text" id='name_input' name='name' className='border rounded p-2 w-full' placeholder='Doc xyz' />
        </div>

        <div className='mb-4'>
          <label htmlFor="doc_type_select"> <span className='text-red-500'>*</span> Document Type</label>
          <Select placeholder="What this document is for?" id='doc_type_select' name='doc_type' options={docTypeOptions} />
        </div>
        {showError && <div className='text-red-500'>*All Field is Required</div>}
        <Button type='submit' title='submit' wrapperClassName='w-full bg-blue-900 text-white p-2 rounded font-semibold' buttonClassName='w-full h-full' />
      </form>
    </div>
  )
};

export default NewDocForm;