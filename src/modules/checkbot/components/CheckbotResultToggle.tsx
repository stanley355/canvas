import Button from '@/common/components/Button';
import React from 'react';
import { FaDivide, FaPlus, FaTimes } from 'react-icons/fa';

const CheckbotResultToggle = () => {
  return (
    <div className='grid grid-cols-3 gap-2 mb-2'>
      <Button type='button' wrapperClassName='w-full border border-red-500 rounded text-red-500 p-1 h-fit' buttonClassName='w-full flex items-center justify-center gap-1'>
        <FaTimes />
        Removed
      </Button>
      <Button type='button' wrapperClassName='w-full border border-gray-700 rounded text-gray-700 p-1 h-fit' buttonClassName='w-full flex items-center justify-center gap-1'>
        <FaDivide />
        All
      </Button>
      <Button type='button' wrapperClassName='w-full border border-green-500 rounded text-green-500 p-1 h-fit' buttonClassName='w-full flex items-center justify-center gap-1'>
        <FaPlus />
        Added
      </Button>
    </div>
  )
};

export default CheckbotResultToggle;