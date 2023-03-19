import React from 'react'
import HomePageLayout from '@/modules/home/components/Layout';

const Home = () => {
  return (
    <HomePageLayout>
      <div className='pt-40 flex flex-col items-center justify-center px-4 '>
        <h1 className='text-4xl text-center font-semibold leading-10'>All The Data You Need in The World</h1>
        <input type="text" placeholder='Start Searching...' className='bg-transparent text-white m-4 border p-2 w-full rounded-sm'/>
      </div>
    </HomePageLayout>
  );
};

export default Home;
