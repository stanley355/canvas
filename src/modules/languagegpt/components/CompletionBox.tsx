import React from 'react';
import Image from 'next/image';
import { FaCopy, FaUser } from 'react-icons/fa';
import Button from '@/common/components/Button';
import { copyToClipboard } from '@/common/lib/copyToClipboard';

interface ICompletionBox {
  promptAndCompletionList: Array<any>
}

const CompletionBox = (props: ICompletionBox) => {
  const { promptAndCompletionList } = props;
  
  return (
    <div className='h-[83vh] lg:h-[84vh] p-2 lg:w-2/3 lg:mx-auto overflow-y-auto border-b'>
      <div className='flex gap-4 border-b border-gray-500 pb-2 '>
        <span>
          <Image src="/images/languageai.png" alt='Language AI' width={30} height={30} />
        </span>
        <span>
          <div>Here&apos;s what I can do for you:</div>
          <ul className='list-disc ml-4'>
            <li>Translate Text to any Languages</li>
            <li>Fix Grammar & Spelling in any Languages</li>
            <li>Analyse your writing </li>
            <li>Provide feedback for your writing</li>
            <li>Provide GPT-4 Functionality</li>
          </ul>
        </span>
      </div>
      {promptAndCompletionList.map((list: any, index: number) =>
        <div className='flex gap-4 border-b border-gray-500 p-2 ' key={index}>
          <span>
            {list.role === "system" ? 
            <Image src="/images/languageai.png" alt='Language AI' width={30} height={30} /> :
              <FaUser className='text-lg' />
            }
          </span>
          <span className='w-full'>{list.prompt}</span>
          {list.role !== "user" && <Button type='button'
            wrapperClassName='hidden lg:block border border-black p-1 rounded'
            buttonClassName='w-full h-full flex items-center gap-2'
            onClick={() => copyToClipboard(list.prompt)} >
            <FaCopy />
            <span>Copy</span>
          </Button>}
        </div>
      )}
    </div>
  )
};

export default CompletionBox;