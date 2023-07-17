import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';
import { createDocument } from '../lib/createDocument';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const NewDocForm = () => {
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const name = target.name.value;

    setShowError(false);
    if (!name) {
      setShowError(true);
      return;
    }

    const token: any = Cookies.get("token");
    const user:any = jwtDecode(token);
    const createDocPayload = {
      user_id: user.id,
      name,
      doc_type: "translate" // TODO: Add checkbot type later
    };

    const doc = await createDocument(createDocPayload)

    console.log(doc);
  }

  return (
    <div className='p-2 border rounded border-gray-500 lg:w-1/3 lg:mx-auto'>
      <div className='text-center text-xl mb-4 font-semibold'>New Translate Document</div>
      <form onSubmit={handleSubmit} >
        <div className='mb-4'>
          <label htmlFor="name_input"> <span className='text-red-500'>*</span> Document Name: </label>
          <input type="text" id='name_input' name='name' className='border rounded p-2 w-full' placeholder='Doc xyz' />
        </div>

        {/* TODO: Add document type select  */}
        {showError && <div className='text-red-500'>*Document Name is Required</div>}
        <Button type='submit' title='submit' wrapperClassName='w-full bg-blue-900 text-white p-2 rounded font-semibold' buttonClassName='w-full h-full' />
      </form>
    </div>
  )
};

export default NewDocForm;