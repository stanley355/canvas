import Layout from '@/common/components/Layout';
import CompletionBox from '@/modules/languagegpt/components/CompletionBox';
import PromptForm from '@/modules/languagegpt/components/PromptForm';
import React from 'react';

const LanguageGPT = () => {
  return (
    <Layout>
      <div className='container mx-auto h-[92vh] lg:h-[93vh] bg-white relative text-black'>
        <CompletionBox />
        <PromptForm />
      </div>
    </Layout>
  )
};

export default LanguageGPT;