import React, { useReducer } from 'react';
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

interface IDocumentTranslate {
  document: any;
}

const DocumentTranslate = (props: IDocumentTranslate) => {
  const { document } = props;
  const isDesktop = useDesktopScreen();
  const [states, dispatch] = useReducer(docTranslateReducer, DOC_TRANSLATE_STATES);

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  if (!isDesktop) {
    return <UseBiggerScreen />
  }

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className='bg-white container mx-auto min-h-screen py-8 px-4'>
        <div className='flex items-center justify-between text-black border-b pb-2'>
          <span className='font-semibold text-xl'>{document?.name}</span>
          <div className='flex items-center gap-4'>
            <RenameDocBtn docID={document?.id} />
            <DeleteDocBtn docID={document?.id} name={document?.name} />
          </div>
        </div>

        <TranslateDocTable prompts={states.prompts} />
      </div>
    </Layout>
  )
};

export default DocumentTranslate;
export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx;

  let document = null;
  if (params?.id) {
    document = await findDocument(String(params.id));
  }

  return {
    props: {
      document
    }
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
}