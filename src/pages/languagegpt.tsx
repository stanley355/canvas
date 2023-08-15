import Layout from '@/common/components/Layout';
import { languageGPTReducer } from '@/modules/checkbot/lib/reducer';
import CompletionBox from '@/modules/languagegpt/components/CompletionBox';
import PromptForm from '@/modules/languagegpt/components/PromptForm';
import { LANGUAGE_GPT_STATES } from '@/modules/languagegpt/lib/states';
import React, { useReducer } from 'react';

const LanguageGPT = () => {
  const [state, dispatch] = useReducer(languageGPTReducer, LANGUAGE_GPT_STATES);
  const { showLogin, showBalanceModal, promptAndCompletionList } = state;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  
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