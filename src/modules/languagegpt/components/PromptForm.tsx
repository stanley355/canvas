import React, { useState } from 'react';
import { FaAngleDoubleRight, FaSpinner } from 'react-icons/fa';

import Button from '@/common/components/Button';
import { sendFirebaseEvent } from '@/common/lib/firebase/sendFirebaseEvent';
import { handlePremiumPrompt } from '@/modules/premium/lib/handlePremiumPrompt';
import { toast } from 'react-toastify';

interface IPromptForm {
  promptAndCompletionList: Array<any>;
  updateState: (name: string, value: any) => void;
}

const PromptForm = (props: IPromptForm) => {
  const { promptAndCompletionList, updateState } = props;
  const [promptValue, setPromptValue] = useState("Translate 'Bagaimana harimu?' to English");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!promptValue) return;
    sendFirebaseEvent("languagegpt", { prompt });

    setIsLoading(true);
    const { content, prompt_tokens, completion_tokens } = await handlePremiumPrompt(promptValue);
    setIsLoading(false);
    if (content) {
      setPromptValue("");
      updateState("promptAndCompletionList",
        [
          ...promptAndCompletionList,
          { role: "user", prompt: promptValue },
          { role: "system", prompt: content }
        ]
      );

      return;


    }

    
    toast.error("Server error, please try again");
    return;
  }

  return (
    <div className='absolute top-[83vh] lg:top-[85vh] left-0 w-full'>
      <form onClick={handleSubmit} className='flex items-center bg-black rounded  w-full  lg:w-2/3 lg:mx-auto border border-white'>
        <label htmlFor="prompt" className='p-2 w-5/6'>
          <textarea
            name='userPrompt'
            id='prompt'
            value={promptValue}
            className='w-full rounded-md p-1 resize-none'
            onChange={(e: any) => setPromptValue(e.target.value)}
          />
        </label>

        <Button type='submit' wrapperClassName='w-1/6 h-full text-white text-2xl' buttonClassName='w-full h-full flex items-center justify-center' disabled={isLoading}>
          {isLoading ? <FaSpinner className='animate-spin' /> : <FaAngleDoubleRight />}
        </Button>
      </form>
    </div>
  )
};

export default PromptForm;