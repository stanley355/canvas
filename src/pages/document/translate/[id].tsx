import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '@/common/components/Layout';
import MetaSEO from '@/common/components/MetaSEO';
import { useDesktopScreen } from '@/common/hooks/useDesktopScreen';
import { TRANSLATE_SEO } from '@/modules/translate/lib/constant';
import UseBiggerScreen from '@/common/components/UseBiggerScreen';
import { findDocument } from '@/modules/document/lib/findDocument';
import RenameDocBtn from '@/modules/document/component/RenameDocBtn';
import DeleteDocBtn from '@/modules/document/component/DeleteDocBtn';

interface IDocumentTranslate {
  document: any;
}

const DocumentTranslate = (props: IDocumentTranslate) => {
  const { document } = props;
  const isDesktop = useDesktopScreen();

  if (!isDesktop) {
    return <UseBiggerScreen />
  }

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className='bg-white container mx-auto min-h-screen py-8 px-4'>
        <div className='flex items-center justify-between text-black'>
          <span className='font-semibold text-xl'>{document?.name}</span>
          <div className='flex items-center gap-4'>
            <RenameDocBtn docID={document?.id} />
            <DeleteDocBtn docID={document?.id} name={document?.name} />
          </div>
        </div>
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