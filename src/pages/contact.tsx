import Layout from '@/common/components/Layout';
import React from 'react';

const Contact = () => {
  return (
    <Layout>
      <div className='container mx-auto p-4 h-screen text-lg'>
        <div className='mb-4'>Hello, my name is <strong>Stanley Winata</strong> </div>
        <div>For any support or feature request, you can contact me at</div>
        <div>Email: winatastanley355@gmail.com</div>
        <div>Phone: 083807275627</div>
        <div>Address: Jl. Tangki 1 no 21, Jakarta, Indonesia</div>

        <div className='text-xl mt-4'>Thanks for using this platform and nice to meet you! </div>
      </div>
    </Layout>
  )
};

export default Contact;
