import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import Router from 'next/router';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import Button from '@/common/components/Button';
import { createDocument } from '../lib/createDocument';

const NewDocForm = () => {
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const name = target.name.value;

    setShowError(false);
    if (!name) {
      setShowError(true);
      return;
    }

    setIsLoading(true);
    const token: any = Cookies.get("token");
    const user:any = jwtDecode(token);
    const createDocPayload = {
      user_id: user.id,
      name,
      doc_type: "translate" // TODO: Add checkbot type later
    };

    const doc = await createDocument(createDocPayload);
    if (doc.id) {
      setIsLoading(false);
      Router.push(`/document/translate/${doc.id}`);
      return;
    }

    toast.error("Error creating document, please try again");
    setIsLoading(false);
    return;
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
        <Button
            type="submit"
            disabled={isLoading}
            wrapperClassName="w-full bg-blue-900 text-white p-2 ml-auto text-md rounded-md font-semibold text-center"
            buttonClassName="w-full h-full"
          >
            {isLoading ? (
              <div className="flex flex row items-center justify-center">
                <span className="mr-2">Creating</span>
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "Create"
            )}
          </Button>
      </form>
    </div>
  )
};

export default NewDocForm;