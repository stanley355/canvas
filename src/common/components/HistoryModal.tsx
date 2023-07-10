import React from 'react';
import Button from './Button';
import { FaClock } from 'react-icons/fa';


const HistoryModal = () => {
  return (
    <div>
      <Button type='button' wrapperClassName='w-fit mx-auto rounded-md p-2 bg-blue-900 text-white' buttonClassName='w-full flex items-center justify-center gap-2' >
        <FaClock />
        <span>Show History</span>
      </Button>

    </div>
  )
};

export default HistoryModal;