import React, { useState } from 'react';
import Button from '@/common/components/Button';
import { FaTrash } from 'react-icons/fa';

interface IDeleteDocBtn {
  docID: string;
  name: string;
}

const DeleteDocBtn = (props: IDeleteDocBtn) => {
  const { docID, name } = props;
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
      <Button type='button' wrapperClassName='text-red-500 px-1 rounded hover:bg-white' buttonClassName='w-full h-full' onClick={() => setShowModal(true)}>
        <FaTrash />
      </Button>

      {showModal && <div className='fixed top-0 left-0 bg-white bg-opacity-40 w-full h-full z-5'>
        <div className='w-[400px] mt-40 mx-auto bg-white shadow shadow-black p-4 rounded text-xl'>
          <div className='mb-4 text-black text-center font-semibold'>Are you sure you want to delete document "{name}"?</div>
          <div className='grid grid-cols-2 gap-4'>
            <Button type='button' title='Yes' wrapperClassName='bg-blue-900 p-2 text-white font-semibold rounded' buttonClassName='w-full h-full' />
            <Button type='button' title='No' wrapperClassName='border border-gray-500 p-2 text-black font-semibold rounded' buttonClassName='w-full h-full' onClick={() => setShowModal(false)} />
          </div>
        </div>
      </div>}
    </div>
  )
};

export default DeleteDocBtn;