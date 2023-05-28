import React, { useState } from 'react';
import Select from 'react-select';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { createTopup } from '../lib/createTopup';
import { DOKU_VA_LIST } from '../lib/constant';
import Button from '@/common/components/Button';
import { createDokuVA } from '../lib/createDokuVA';

interface ITopupForm {
  user: any;
}

const TopupForm = (props: ITopupForm) => {
  const { user } = props;
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmit(true);

    const target = e.target as any;
    const amount = target.amount.value;
    const paymentMethod = target.payment_method.value;

    if (!amount) {
      setHasSubmit(false);
      toast.error("Topup amount is required!");
      return;
    }

    const topup = await createTopup(user.id, Number(amount));

    if (topup?.id) {
      const dokuVAPayload = {
        dokuPath: paymentMethod,
        topupID: topup.id,
        amount: Number(amount),
        user
      }
      const dokuVA = await createDokuVA(dokuVAPayload);
      if (dokuVA?.virtual_account_info?.virtual_account_number) {
        // TODO: Dispatch VA info to the page
        setHasSubmit(false);
        return;
      }

      toast.error("Something went wrong, please try again");
      setHasSubmit(false);
      return;
    }

    setHasSubmit(false);
    toast.error("Something went wrong, please try again");
    return;
  }

  return (
    <div className='mt-8'>
      <div className='font-semibold mb-2 text-xl'>How much would you like to topup?</div>
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='mb-4'>
          <label htmlFor="amount"></label>
          <input type="number" name="amount" id="amount_input" placeholder='Rp ...' className='text-black p-2 w-full rounded' disabled={hasSubmit} />
        </div>
        <Select options={DOKU_VA_LIST} placeholder="Payment Method (Virtual Account)" className='text-black' name="payment_method" isDisabled={hasSubmit} />
        <Button type='submit' wrapperClassName='w-full text-center mt-4 p-2 bg-white text-black font-semibold' buttonClassName='w-full' disabled={hasSubmit}>
          {hasSubmit ? <FaSpinner className='mx-auto animate-spin' /> : "Topup"}
        </Button>
      </form>
    </div>
  );
};

export default TopupForm;