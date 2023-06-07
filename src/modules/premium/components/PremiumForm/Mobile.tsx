import React, { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import Button from '@/common/components/Button';
import { PREMIUM_OPTIONS } from '../../lib/constant';
import { LANGUAGE_LIST } from '@/modules/translate/constant';
import SourceTextArea from '@/common/components/SourceTextArea';
import { handlePremiumTranslation } from '../../lib/handlePremiumTranslation';

const MobilePremiumForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const onActionChange = (option: any) => {
    const isTranslate = option.value === "translate";
    if (isTranslate) setShowLanguages(true);
    else setShowLanguages(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const target = e.target as any;
    const instruction = target.instruction.value;
    const sourceText = target.source_text.value;

    if (!instruction) {
      toast.error("Instruction can't be empty!");
      setIsLoading(false);
      return;
    }

    if (instruction === "translate") {
      const targetLang = target.target_lang.value;
      if (!targetLang) {
        toast.error("Target Language can't be empty!");
        setIsLoading(false);
        return;
      }

      const completion = await handlePremiumTranslation(targetLang, sourceText);
      if (!completion) {
        toast.error("Something went wrong, please try again");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      return completion
    }

    setIsLoading(false);
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="instruction">
        <Select
          id="instruction_select"
          name="instruction"
          placeholder="What can I do for you?"
          options={PREMIUM_OPTIONS}
          onChange={onActionChange}
          className='text-black mb-4'
        />
      </label>
      <label htmlFor="target_lang" className={showLanguages ? "block" : "hidden"}>
        <Select
          placeholder="Target Language"
          id="target_lang_select"
          name="target_lang"
          options={LANGUAGE_LIST}
          className='text-black mb-4'
        />
      </label>
      <SourceTextArea />
      <Button type='submit' wrapperClassName="mt-4 w-full bg-white text-black p-2 text-center rounded" buttonClassName="w-full">
        {isLoading ? (
          <div className="flex flex row items-center justify-center">
            <span className="mr-2">Processing</span>
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
};

export default MobilePremiumForm;