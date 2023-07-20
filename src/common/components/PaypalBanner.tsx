import Link from 'next/link';
import React from 'react';
import { FaPaypal } from 'react-icons/fa';

const PaypalBanner = () => {
  return (
    <div className='bg-yellow-500 text-blue-900 p-2 rounded flex flex-col lg:flex-row items-center lg:justify-center mb-4'>
      <FaPaypal className='text-3xl' />
      <div>Paypal Topup is now available! Topup with Paypal or Credit Card <Link href="/topup/" className='underline text-blue-900 font-semibold'>here</Link>! </div>
    </div>
  )
};

export default PaypalBanner;