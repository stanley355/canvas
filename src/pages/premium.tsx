import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Layout from '@/common/components/Layout';
import PremiumForm from '@/modules/premium/components/PremiumForm';

const Premium = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4" id="title">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaPlusCircle className="text-3xl mr-2" />
          <span>LanguageAI Premium</span>
        </h1>
        <h2 className="text-xl lg:text-xl text-center mb-4">
          #1 Language App in the World (Powered by GPT-4)
        </h2>
        <PremiumForm />
      </div>
    </Layout>
  )
};

export default Premium;