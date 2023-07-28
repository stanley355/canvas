import { HEADER_MENU } from '@/common/components/Header/constant';
import Link from 'next/link';
import React from 'react';
import { SiOpenai } from 'react-icons/si';

const GPT4IndoSidebar = () => {
  return (
    <div className='h-screen lg:col-span-1 hidden lg:block'>
      <div className='text-center p-2 pb-0 text-2xl'>
        GPT4Indo
      </div>
      <div className='text-center'>
        Subsidiary of LanguageAI
      </div>

      <div className='mt-16'>
        <div className='text-center mb-2'>Explore Other Stuffs</div>
        <div className='flex items-center justify-center p-2 gap-2 bg-white text-black cursor-pointer'>
          <span>
            <SiOpenai />
          </span>
          <span>GPT4Indo</span>
        </div>
        {HEADER_MENU.slice(0, 6).map((menu) =>
          <Link key={menu.title} href={menu.url} className='flex items-center justify-center p-2 gap-2 w-full h-full hover:bg-white hover:text-black'>
            <span>{menu.icon}</span>
            <span>{menu.title}</span>
          </Link>)}
      </div>
    </div>
  )
};

export default GPT4IndoSidebar;