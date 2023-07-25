import React from 'react';
import Layout from '@/common/components/Layout';

const MediaSplashScren = () => (
  <Layout>
    <div className='container bg-white mx-auto p-4 text-black min-h-screen lg:grid lg:grid-cols-3 lg:gap-4'>
      <div className='lg:col-span-2'>
        <div className='lg:flex lg:items-center lg:flex-row-reverse lg:justify-between'>
          <div className='w-16 bg-gray-300 animate-bounce h-8' />
          <div className='font-semibold text-lg lg:text-xl text-center my-4 w-32 bg-gray-300 animate-bounce h-8' />
        </div>
        <div className='w-full h-40 bg-blue-900 animate-bounce' />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-40 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
      </div>
      <div>

        <div className='w-full h-40 bg-blue-900 animate-pulse mb-4' />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-40 bg-blue-900 animate-pulse mb-4' />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-40 bg-blue-900 animate-pulse mb-4' />
        <div className='w-full h-8 bg-gray-300 animate-pulse mb-4'  />
        <div className='w-full h-16 bg-gray-300 animate-pulse mb-4'  />
      </div>
    </div>
  </Layout>
);

export default MediaSplashScren;