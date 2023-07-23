import React, { useEffect, useReducer } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '@/common/components/Layout';
import MetaSEO from '@/common/components/MetaSEO';
import UseBiggerScreen from '@/common/components/UseBiggerScreen';
import RenameDocBtn from '@/modules/document/component/RenameDocBtn';
import DeleteDocBtn from '@/modules/document/component/DeleteDocBtn';
import TranslateDocTable from '@/modules/document/component/TranslateDocTable';
import { useDesktopScreen } from '@/common/hooks/useDesktopScreen';
import { findDocument } from '@/modules/document/lib/findDocument';
import { TRANSLATE_SEO } from '@/modules/translate/lib/constant';
import { docTranslateReducer } from '@/modules/document/lib/reducer';
import { DOC_TRANSLATE_STATES } from '@/modules/document/lib/states';
import { findDocumentPrompts } from '@/modules/document/lib/findDocumentPrompts';
import TranslateRowEditor from '@/modules/document/component/TranslateRowEditor';

export interface IPrompt {
  id: number,
  prompt_text: string,
  completion_text: string,
  document_id: string
}

interface IDocumentTranslate {
  document: any;
  prompts: Array<IPrompt>
}

const DocumentTranslate = (props: IDocumentTranslate) => {
  const { document, prompts } = props;
  const isDesktop = useDesktopScreen();

  const [states, dispatch] = useReducer(docTranslateReducer, DOC_TRANSLATE_STATES);
  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  useEffect(() => {
    if (prompts?.length > 0) {
      updateState("prompts", prompts);
    }

    if (!prompts?.length) {
      const defaultPrompt = {
        id: 0,
        document_id: document?.id,
        prompt_text: "Click Edit to change",
        completion_text: "Click Edit to change",
      };
      updateState("prompts", [defaultPrompt]);
    }
  }, [document]);

  if (!isDesktop) {
    return <UseBiggerScreen />
  }

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className='bg-white container mx-auto h-screen relative'>
        <div className='flex items-center justify-between text-black border-b border-gray-500 p-4'>
          <span className='font-semibold text-xl'>{document?.name}</span>
          <div className='flex items-center gap-4'>
            <RenameDocBtn docID={document?.id} />
            <DeleteDocBtn docID={document?.id} name={document?.name} />
          </div>
        </div>

        <TranslateDocTable prompts={states.prompts} dispatch={dispatch} />
        {/* <TranslateRowEditor index={0} /> */}
      </div>
    </Layout>
  )
};

export default DocumentTranslate;
export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx;

  let document = null;
  let prompts = [];
  if (params?.id) {
    document = await findDocument(String(params.id));
    prompts = await findDocumentPrompts(String(params.id));
  }

  return {
    props: {
      document,
      prompts
    }
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
}