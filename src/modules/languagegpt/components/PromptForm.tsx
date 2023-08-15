import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import Button from '@/common/components/Button';
import { sendFirebaseEvent } from '@/common/lib/firebase/sendFirebaseEvent';
import { handlePremiumPrompt } from '@/modules/premium/lib/handlePremiumPrompt';

const PromptForm = () => {

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const prompt = target.prompt.value;
    if (!prompt) return;

    sendFirebaseEvent("languagegpt", { prompt });
    const { content, prompt_tokens, completion_tokens } = await handlePremiumPrompt(prompt);
  }

  return (
    <div className='absolute top-[83vh] lg:top-[85vh] left-0 w-full'>
      <form onClick={handleSubmit} className='flex items-center bg-black rounded  w-full  lg:w-2/3 lg:mx-auto border border-white'>
        <label htmlFor="prompt" className='p-2 w-5/6'>
          <textarea name='prompt' id='prompt' placeholder="Translate 'Bagaimana harimu?' to English" className='w-full rounded-md p-1 resize-none' />
        </label>

        <Button type='submit' wrapperClassName='w-1/6 h-full text-white text-2xl' buttonClassName='w-full h-full flex items-center justify-center'>
          <FaAngleDoubleRight />
        </Button>
      </form>
    </div>
  )
};

export default PromptForm;