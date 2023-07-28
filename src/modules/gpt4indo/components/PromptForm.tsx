import React, { useState } from 'react';
import { FaChevronCircleRight, FaSpinner } from 'react-icons/fa';
import Button from '@/common/components/Button';
import { toast } from 'react-toastify';
import { handlePrompt } from '@/common/lib/handlePrompt';
import { saveUserPrompt } from '@/common/lib/saveUserPrompt';

interface IPromptForm {
  dispatchPrompt: (prompt: string) => void;
  dispatchCompletion: (prompt: string, completion: string) => void;
}

const PromptForm = (props: IPromptForm) => {
  const { dispatchPrompt, dispatchCompletion } = props;
  const [promptVal, setPromptVal] = useState("Masukkan Instruksi Anda");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    const prompt = target.prompt.value;

    if (!prompt) {
      toast.warning("Instruksi Anda belum diisi!");
      return;
    }

    dispatchPrompt(prompt);
    setIsLoading(true);
    setPromptVal("");
    const { content, prompt_tokens, completion_tokens } = await handlePrompt(prompt)
    if (content) {
      dispatchCompletion(prompt, content);
      setIsLoading(false);

      const saveUserPromptPayload = {
        instruction: "GPT4Indo",
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };
      await saveUserPrompt(saveUserPromptPayload);
      return;
    }

    setIsLoading(false);
    dispatchCompletion(prompt, "Terjadi kesalahan, silakan coba lagi");
    return;
  }



  return (
    <form className='bg-gray-700 absolute left-0 bottom-0 w-full p-2 pb-4 text-black' onSubmit={handleSubmit}>
      <div className='w-full lg:w-2/3 rounded-md bg-white flex items-center lg:mx-auto'>
        <label htmlFor="prompt_text" className='rounded-t rounded-lg w-[90%] lg:w-[95%]'>
          <textarea name="prompt" id="prompt_text"
            value={promptVal}
            className='w-full rounded p-1 bg-transparent outline-none resize-none overflow-y-auto'
            onChange={(e) => setPromptVal(e.target.value)}
          />
        </label>
        <Button type='submit' wrapperClassName='w-[10%] lg:w-[5%]' buttonClassName='w-full h-full' disabled={isLoading}>
          {isLoading ? <FaSpinner className='mx-auto text-2xl animate-spin' /> :
            <FaChevronCircleRight className='mx-auto text-2xl' />}
        </Button>
      </div>
    </form>
  );
};

export default PromptForm;