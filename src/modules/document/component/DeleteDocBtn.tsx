import React, { useState } from 'react';
import Button from '@/common/components/Button';
import { FaSpinner, FaTrash } from 'react-icons/fa';
import { deleteDocument } from '../lib/deleteDocument';
import { toast } from 'react-toastify';

interface IDeleteDocBtn {
  docID: string;
  name: string;
}

const DeleteDocBtn = (props: IDeleteDocBtn) => {
  const { docID, name } = props;
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const doc = await deleteDocument(docID);

    if (doc?.id) {
      toast.success(`Document "${name}" deleted`);
      setTimeout(() => window.location.reload(), 1000);
      setIsLoading(false);
      return;
    }

    toast.error("Fail to delete document");
    setIsLoading(false);
    return;
  }

  return (
    <div>
      <Button type='button' wrapperClassName='text-red-500 px-1 rounded hover:bg-white' buttonClassName='w-full h-full' onClick={() => setShowModal(true)}>
        <FaTrash />
      </Button>

      {showModal && <div className='fixed top-0 left-0 bg-white bg-opacity-40 w-full h-full z-5'>
        <div className='w-[400px] mt-40 mx-auto bg-white shadow shadow-black p-4 rounded text-xl'>
          <div className='mb-4 text-black text-center font-semibold'>Are you sure you want to delete document "{name}"?</div>
          <div className='grid grid-cols-2 gap-4'>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={handleDelete}
              wrapperClassName="w-full bg-blue-900 text-white p-2 ml-auto text-md rounded font-semibold"
              buttonClassName="w-full h-full"
            >
              {isLoading ? (
                <div className="flex flex row items-center justify-center">
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                "Yes"
              )}
            </Button>
            <Button type='button' disabled={isLoading} title='No' wrapperClassName='border border-gray-500 p-2 text-black font-semibold rounded' buttonClassName='w-full h-full' onClick={() => setShowModal(false)} />
          </div>
        </div>
      </div>}
    </div>
  )
};

export default DeleteDocBtn;