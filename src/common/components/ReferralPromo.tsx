import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FaSpinner } from 'react-icons/fa';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Button from './Button';

const LoginModal = dynamic(() => import("../../modules/login/components/LoginModal"));

const ReferralPromo = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      setShowLogin(true);
      return;
    }


  }

  return (
    <div className='bg-white w-full text-black lg:flex lg:gap-4 '>
      {showLogin && <LoginModal isFree={false} /> }
      <div className='py-4 lg:w-2/5'>
        <div className='text-3xl text-center font-semibold mb-4'>
          <div>Refer A Friend</div>
          <div>Get Premium</div>
          <div className='text-xl font-normal mt-2'>Get <strong>Rp5000</strong> premium quota for every friend you invited (*your friend will get it too!)</div>
        </div>
        <form onSubmit={handleSubmit} className='mb-2'>
          <input type="text" placeholder='Enter Friend Referral ID' className='rounded-md border p-2 border-gray-500 mb-2 w-full' />
          <Button
            type="submit"
            disabled={isLoading}
            wrapperClassName="w-full bg-blue-900 ml-auto mr-1 text-white py-2 rounded-md font-semibold text-center"
            buttonClassName="w-full h-full"
          >
            {isLoading ? (
              <div className="flex flex row items-center justify-center">
                <span className="mr-2">Processing</span>
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "This is my friend"
            )}
          </Button>
        </form>

        <Button type='link' href='/profile' title='See my referral ID' wrapperClassName='underline text-blue-500' />
      </div>
      <div className='hidden lg:block lg:w-3/4'>
        <Image src="/images/referral_hero.jpg" alt='LanguageAI Referral' width={400} height={400} className='w-full h-full' />
      </div>
    </div>
  )
};

export default ReferralPromo;