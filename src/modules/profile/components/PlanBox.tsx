import React from 'react';
import { FaSkating } from 'react-icons/fa';
import Button from '@/common/components/Button';

interface IPlanBox {
  user: any;
  subscription: any;
}

const PlanBox = (props: IPlanBox) => {
  const { user, subscription } = props;

  return (
    <div className='border border-gray-500 rounded p-2 my-4 lg:my-0 lg:w-2/3 '>
      <div className="flex items-center justify-between">
        <div className='font-semibold lg:text-lg'>
          <div>My Plan:</div>
          {(!subscription.id && !user.balance) && <div>*Freemium Plan</div>}
        </div>
        <Button
          type="link"
          href="/plans/"
          wrapperClassName="bg-blue-900 p-2 text-white rounded"
          buttonClassName="w-full h-full flex items-center gap-2"
        >
          <FaSkating />
          <span>Upgrade</span>
        </Button>
      </div>
      
      <div className='flex flex-col items-center my-8 lg:text-xl w-fit shadow-lg p-4 mx-auto rounded'>
        <FaSkating className='text-3xl' />
        <div className='text-xl  lg:text-3xl font-semibold'>Pay As You Go</div>
        <div>Only Pay for what you need</div>
        <div className='italic text-green-700 font-semibold text-lg lg:text-2xl mt-2'>Rp {user.balance}</div>
        <div className='italic'>balance left</div>
      </div>

    </div>
  )
};

export default PlanBox;