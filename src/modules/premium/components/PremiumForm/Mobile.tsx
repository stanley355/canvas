import React from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';
import { PREMIUM_OPTIONS } from '../../lib/constant';

const MobilePremiumForm = () => {
  return (
    <form action="" className="mb-4">

      <Select placeholder="What can I do for you?" options={PREMIUM_OPTIONS} />
      <label htmlFor="">
        <textarea name="" id="" cols={30} rows={10} className="w-full my-4 p-2 rounded" placeholder="Put your text here" />
      </label>
      <Button type='submit' title='Submit' wrapperClassName="w-full bg-white text-black p-2 text-center rounded" buttonClassName="w-full" />
    </form>
  )
};

export default MobilePremiumForm;