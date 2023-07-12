import Layout from '@/common/components/Layout';
import HomeServices from '@/modules/home/components/HomeServices';
import React from 'react';

const Services = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <HomeServices />
      </div>
    </Layout>
  )
};

export default Services;