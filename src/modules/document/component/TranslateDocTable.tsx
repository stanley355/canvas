import Button from '@/common/components/Button';
import React from 'react';
import { FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa';

const TranslateDocTable = () => {

  return (
    <div>
      <table className='text-black w-full'>
        <thead >
          <tr>
            <th className='w-[5%] border border-gray-500'>No</th>
            <th className='w-[40%] border border-gray-500'>Source Text</th>
            <th className='w-[40%] border border-gray-500'>Translate Text</th>
            <th className='w-[15%] border border-gray-500'>-</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-[4%] border border-gray-500 text-center'>1</td>
            <td className='w-[43%] border border-gray-500 p-2'> Click Edit to Change</td>
            <td className='w-[43%] border border-gray-500 p-2'>Click Edit to Change</td>
            <td className='w-[10%] border border-gray-500 p-2'>
              <Button type='button' wrapperClassName='bg-blue-900 text-white rounded p-1 mb-2' buttonClassName='w-full h-full flex items-center gap-2 justify-center' >
                <FaPencilAlt />
                <span>Edit</span>
              </Button>
              <Button type='button' wrapperClassName='bg-red-500 text-white rounded p-1 mb-2' buttonClassName='w-full h-full flex items-center gap-2 justify-center' >
                <FaTrash />
                <span>Delete</span>
              </Button>
              <Button type='button' wrapperClassName='bg-white text-black border border-gray-500 rounded p-1' buttonClassName='w-full h-full flex items-center gap-2 justify-center' >
                <FaPlus />
                <span>Add Row</span>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default TranslateDocTable;