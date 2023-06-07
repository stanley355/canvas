import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';
import { PREMIUM_OPTIONS } from '../../lib/constant';
import { LANGUAGE_LIST } from '@/modules/translate/constant';
import SourceTextArea from '@/common/components/SourceTextArea';
import { toast } from 'react-toastify';

const MobilePremiumForm = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const onActionChange = (option: any) => {
    const isTranslate = option.value === "translate";
    if (isTranslate) setShowLanguages(true);
    else setShowLanguages(false);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const instruction = target.instruction.value;
    const sourceText = target.source_text.value;

    if (!instruction) {
      toast.error("Instruction can't be empty!");
      return;
    }

    console.log(sourceText);
  }

  const LanguageSelect = () => (
    <label htmlFor="" >
      <Select placeholder="Target Language" options={LANGUAGE_LIST} className='text-black mb-4' />
    </label>
  )

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
      {showLanguages && <LanguageSelect />}
      <SourceTextArea />
      <Button type='submit' title='Submit' wrapperClassName="mt-4 w-full bg-white text-black p-2 text-center rounded" buttonClassName="w-full" />
    </form>
  )
};

export default MobilePremiumForm;