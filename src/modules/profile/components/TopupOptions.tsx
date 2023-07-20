import React from 'react';
import { BsBank } from 'react-icons/bs';
import Button from '@/common/components/Button';
import PaypalBtn from './PaypalBtn';
import { FaPaypal } from 'react-icons/fa';

interface ITopupOptions {
  paypalCredentials: any;
  onBankTrfClick: () => void;
  onPaypalClick: () => void;
}

const TopupOptions = (props: ITopupOptions) => {
  const { paypalCredentials, onBankTrfClick, onPaypalClick } = props;
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
      <Button
        type="button"
        wrapperClassName="w-full bg-yellow-400 text-blue-900 p-3 mb-2 rounded"
        buttonClassName="w-full h-full gap-2 flex items-center justify-center"
        onClick={onPaypalClick}>
        <FaPaypal className='text-xl'/>
        <span>PayPal (Other Countries)</span>
      </Button>
      <PaypalBtn type='card' paypalCredentials={paypalCredentials} />
    </>
  )
};

export default TopupOptions;