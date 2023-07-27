import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import Layout from "@/common/components/Layout";
import { getMediaPageData } from "@/modules/media/lib/getMediaPageData";
import MediaSplashScren from "@/modules/media/components/SplashScreen";
import MetaSEO from "@/common/components/MetaSEO";

interface IMediaSlug {
  article: any;
  sideArticles: Array<any>;
}

const MediaSlug = (props: IMediaSlug) => {
  const { article, sideArticles } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <MediaSplashScren />;
  }

  return (
    <Layout>
      <MetaSEO
        seo={{
          title: article?.metaTags?.title,
          description: article?.metaTags?.description,
          keywords: article?.keywords,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/media/${article.slug}`,
        }}
      />
      <div className="container bg-white mx-auto p-4 text-black min-h-screen lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="lg:col-span-2">
          <div className="lg:flex lg:items-center lg:flex-row-reverse lg:justify-between">
            <div>
              {article?._publishedAt &&
                new Date(article?._publishedAt).toLocaleDateString()}
            </div>
            <div className="font-semibold text-lg lg:text-xl text-center my-4">
              {article?.title}
            </div>
          </div>
          <div>
            <img
              src={article?.heroImg?.url}
              alt={article?.heroImg?.alt}
              loading="lazy"
              className="rounded-md w-full h-auto"
            />
          </div>
          <div
            className="[&>p]:py-4"
            dangerouslySetInnerHTML={{ __html: article?.content }}
          />
        </div>
        <div>
          <div className="font-semibold text-lg lg:text-xl text-center my-4">
            Trending
          </div>
          {sideArticles.length > 0 &&
            sideArticles.map((article: any) => (
              <div key={article.id} className="h-70 border rounded-lg bg-gradient-to-b from-white via-blue-100 to-white shadow-lg shadow-slate-400 mb-4">
                <div>
                  <img
                    src={article?.heroImg?.url}
                    alt={article?.heroImg?.alt}
                    loading="lazy"
                    className="rounded-md w-full h-auto max-h-40"
                  />
                </div>
                <div className="p-2">

                <Link href={`/media/${article.slug}/`}>
                  <div className=" hover:text-blue-900 text-lg underline pt-2">
                    {article.title}
                  </div>
                </Link>
                <div className="pb-6">
                  {article?._publishedAt &&
                    new Date(article?._publishedAt).toLocaleString()}
                </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default MediaSlug;
export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { params } = ctx;
  const { data } = await getMediaPageData(String(params?.slug));

  return {
    props: {
      article: data?.article ? data.article : null,
      sideArticles: data?.allArticles ? data.allArticles : null,
    },
    revalidate: 60 * 60, // one hour
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
