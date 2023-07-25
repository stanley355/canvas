import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '@/common/components/Layout';
import { getArticleData } from '@/modules/article/lib/getArticleData';

interface IMediaSlug {
  article: any;
}

const MediaSlug = (props: IMediaSlug) => {
  const { article } = props;
  console.log(article);
  
  return (
    <Layout>
      <div>
        woi
      </div>
    </Layout>
  )
};

export default MediaSlug;
export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { params } = ctx;
  const { data } = await getArticleData(String(params?.slug));

  return {
    props: {
      article: data?.article ? data.article : null
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
