import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '@/common/components/Layout';
import MetaSEO from '@/common/components/MetaSEO';
import { useDesktopScreen } from '@/common/hooks/useDesktopScreen';
import { TRANSLATE_SEO } from '@/modules/translate/lib/constant';
import UseBiggerScreen from '@/common/components/UseBiggerScreen';

const DocumentTranslate = () => {
  const isDesktop = useDesktopScreen();

  if (!isDesktop) {
    return <UseBiggerScreen />
  }

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className='bg-white container mx-auto min-h-screen'>

      </div>
    </Layout>
  )
};

export default DocumentTranslate;
export const getStaticProps: GetStaticProps = (ctx: GetStaticPropsContext) => {
  const { params } = ctx;
  console.log(params);

  return {
    props: {}
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
}