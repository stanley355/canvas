import React from 'react';
import Button from './Button';
import { FaClock, FaTimes } from 'react-icons/fa';


const HistoryModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black">
      <div className='flex items-center text-xl justify-between border-b p-4'>
        <div className='flex items-center gap-2 font-semibold'>
          <FaClock />
          <span>My History</span>
        </div>
        <Button type='button' wrapperClassName='text-2xl' buttonClassName='w-full flex items-center' >
          <FaTimes />
        </Button>
      </div>
    </div>
  )
};

export default HistoryModal;