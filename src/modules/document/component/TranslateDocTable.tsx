import Button from '@/common/components/Button';
import { IPrompt } from '@/pages/document/translate/[id]';
import React from 'react';
import { FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa';

interface ITranslateDocTable {
  prompts: any;
}

const TranslateDocTable = (props: ITranslateDocTable) => {
  const { prompts } = props;

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
          {prompts.map((prompt: IPrompt, index: number) => <tr key={index}>
            <td className='w-[5%] border border-gray-500 text-center'>{index + 1}</td>
            <td className='w-[40%] border border-gray-500 p-2'>{prompt.prompt_text}</td>
            <td className='w-[40%] border border-gray-500 p-2'>{prompt.completion_text}</td>
            <td className='w-[15%] border border-gray-500 p-2'>
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
          </tr>)}
        </tbody>
      </table>
    </div>
  )
};

export default TranslateDocTable;