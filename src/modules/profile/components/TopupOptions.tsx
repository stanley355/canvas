import React from 'react';
import { BsBank } from 'react-icons/bs';
import Button from '@/common/components/Button';
import PaypalBtn from './PaypalBtn';

interface ITopupOptions {
  onBankTrfClick: () => void;
}

const TopupOptions = (props: ITopupOptions) => {
  const { onBankTrfClick } = props;
  return (
    <>
      <div className="text-center text-lg font-semibold my-4">Topup using</div>
      <Button
        type="button"
        wrapperClassName="w-full bg-blue-900 text-white p-3 mb-2 rounded"
        buttonClassName="w-full h-full gap-2 flex items-center justify-center"
        onClick={onBankTrfClick}>
        <BsBank />
        <span>Bank Transfer (Indonesia)</span>
      </Button>
      <PaypalBtn />
    </>
  )
};

export default TopupOptions;