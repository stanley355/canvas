import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '@/common/components/Layout';
import { getArticleData } from '@/modules/article/lib/getArticleData';

interface IMediaSlug {
  article: any;
}

const MediaSlug = (props: IMediaSlug) => {
  const { article } = props;

  return (
    <Layout>
      <div className='container bg-white mx-auto p-4 text-black min-h-screen lg:grid lg:grid-cols-3 lg:gap-4'>
        <div className='lg:col-span-2'>
          <div className='lg:flex lg:items-center lg:flex-row-reverse lg:justify-between'>
            <div>{new Date(article?._publishedAt).toLocaleDateString()}</div>
            <div className='font-semibold text-lg lg:text-xl text-center my-4'>{article?.title}</div>
          </div>
          <div>
            <img src={article?.heroImg?.url} alt={article?.heroImg?.alt} loading='lazy' className='rounded-md w-full h-auto' />
          </div>
          <div className='[&>p]:py-4' dangerouslySetInnerHTML={{ __html: article?.content }} />
        </div>
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
