import React, { useState } from 'react';
import { SiOpenai } from 'react-icons/si';
import PromptForm from '@/modules/gpt4indo/components/PromptForm';
import SystemIntro from '@/modules/gpt4indo/components/SystemIntro';
import { FaSpinner, FaUserCircle } from 'react-icons/fa';

interface IChat {
  prompt: string;
  completion: string;
}

const GPT4Indo = () => {
  const [chats, setChats] = useState<Array<IChat>>([]);

  const handleNewPrompt = (prompt: string) => {
    let newChats: any = structuredClone(chats);
    newChats.push({ prompt, completion: "" });
    setChats(newChats);
  }

  // console.log(chats);
  const handleNewCompletion = (prompt: string, completion: string) => {
    let newChats: any = structuredClone(chats);
    newChats.push({ prompt, completion });
    setChats(newChats);
    return;
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
      <div className='h-screen lg:col-span-1 border hidden lg:block'>
        hi
      </div>
      <div className='h-screen bg-white: lg:col-span-4 relative'>
        <div className='text-center bg-black p-2 text-white lg:hidden'>
          GPT4Indo
        </div>
        <div className='h-[95%]'>
          <div className='h-[91%] lg:h-[96%] overflow-y-auto bg-gray-700'>
            <SystemIntro />
            {chats.length > 0 && chats.map((chat: any, index) =>
              <div key={index}>
                <div className='bg-gray-800 p-4 text-white border-b'>
                  <div className='flex items-center gap-2 lg:w-2/3 lg:mx-auto'>
                    <div className='text-xl'><FaUserCircle /></div>
                    <div>{chat.prompt}</div>
                  </div>
                </div>
                <div className='bg-gray-700 p-4 text-white border-b'>
                  <div className='flex items-center gap-2 lg:w-2/3 lg:mx-auto'>
                    <div className='text-xl'><SiOpenai /></div>
                    <div>{chat.completion ? chat.completion : <FaSpinner className='animate-spin' />}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <PromptForm
            dispatchPrompt={handleNewPrompt}
            dispatchCompletion={handleNewCompletion}
          />
        </div>
      </div>
    </div>
  )
};

export default GPT4Indo;