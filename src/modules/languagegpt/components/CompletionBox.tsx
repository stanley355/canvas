import React from 'react';
import Image from 'next/image';

const CompletionBox = () => {
  return (
    <div className='h-[83vh] lg:h-[84vh] p-2 lg:w-2/3 lg:mx-auto'>
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
    </div>
  )
};

export default CompletionBox;