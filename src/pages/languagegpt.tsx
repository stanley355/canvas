import React, { useEffect, useReducer } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import MetaSEO from '@/common/components/MetaSEO';
import Layout from '@/common/components/Layout';
import CompletionBox from '@/modules/languagegpt/components/CompletionBox';
import PromptForm from '@/modules/languagegpt/components/PromptForm';
import { languageGPTReducer } from '@/modules/languagegpt/lib/reducer';
import { LANGUAGE_GPT_STATES } from '@/modules/languagegpt/lib/states';
import { HOME_SEO } from '@/modules/home/lib/constant';
import { handlePrompt } from '@/common/lib/handlePrompt';

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const NoPlansModal = dynamic(
  () => import("../modules/premium/components/NoPlansModal")
);

const LanguageGPT = (props: any) => {
  const { queryPromptAndCompletionList } = props;
  const [state, dispatch] = useReducer(languageGPTReducer, LANGUAGE_GPT_STATES);
  const { showLogin, showBalanceModal, promptAndCompletionList } = state;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  useEffect(() => {
    if (queryPromptAndCompletionList.length > 0) {
      updateState("promptAndCompletionList", queryPromptAndCompletionList);
    }
  }, [queryPromptAndCompletionList]);

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      {showLogin && <LoginModal />}
      {showBalanceModal && <NoPlansModal />}
      <div className='container mx-auto h-[92vh] lg:h-[93vh] bg-white relative text-black'>
        <CompletionBox promptAndCompletionList={promptAndCompletionList} />
        <PromptForm promptAndCompletionList={promptAndCompletionList} updateState={updateState} />
      </div>
    </Layout>
  )
};

export default LanguageGPT;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  if (query?.prompt) {
    const { content } = await handlePrompt(String(query?.prompt));

    if (content) {
      const queryPromptAndCompletionList = [
        { role: "user", prompt: query.prompt },
        { role: "system", prompt: content }
      ]
      return {
        props: {
          queryPromptAndCompletionList
        }
      }
    }
  }

  return {
    props: {
      queryPromptAndCompletionList: []
    }
  }
}