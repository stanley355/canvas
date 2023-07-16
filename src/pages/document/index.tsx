import Button from '@/common/components/Button';
import Layout from '@/common/components/Layout';
import NewDocForm from '@/modules/document/component/NewDocForm';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Document = () => {
  return (
    <Layout>
      <div className='container mx-auto bg-white text-black p-4 h-screen overflow-y-scroll'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>My Documents</h1>
          <Button type='button' wrapperClassName='w-fit bg-blue-900 text-white p-2 font-semibold rounded' buttonClassName='w-full h-full flex items-center gap-2' >
            <FaPlusCircle />
            <span>Add New</span>
          </Button>
        </div>

        <div className='py-4'>
          <NewDocForm />
          {/* <div className='mt-8 text-center'>*Click Add New to add new Document</div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Document;