import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Button from '@/common/components/Button';
import { toast } from 'react-toastify';
import { createTopup } from '../lib/createTopup';
import { createMidtransSnap } from '../lib/createMidtransSnap';

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

    if (!amount) {
      setHasSubmit(false);
      toast.error("Topup amount is required!");
      return;
    }

    const topup = await createTopup(user.id, Number(amount));

    if (topup?.id) {
      const midtrans = await createMidtransSnap(topup.id, Number(amount), user);
      console.log(midtrans);
      if (midtrans?.redirect_url) {
        window.open(midtrans.redirect_url, '_blank');
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
        <div>
          <label htmlFor="amount"></label>
          <input type="number" name="amount" id="amount_input" placeholder='Rp ...' className='text-black p-2 w-full rounded' disabled={hasSubmit} />
        </div>
        <Button type='submit' wrapperClassName='w-full text-center mt-4 p-2 bg-white text-black font-semibold' buttonClassName='w-full' disabled={hasSubmit}>
          {hasSubmit ? <FaSpinner className='mx-auto animate-spin' /> : "Topup"}
        </Button>
      </form>
    </div>
  )
};

export default TopupForm;