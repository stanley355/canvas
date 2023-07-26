import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SiTaichilang } from "react-icons/si";

import Layout from "@/common/components/Layout";
import { getMediaHomeData } from "@/modules/media/lib/getMediaHomeData";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";

interface IMediaHome {
  articles: Array<any>;
}

const MediaSlug = (props: IMediaHome) => {
  const { articles } = props;

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="container bg-white mx-auto p-4 text-black min-h-screen">
        <div className="font-semibold text-2xl text-center my-4 flex items-center gap-2 justify-center">
          <SiTaichilang />
          <span>LanguageAI NewsLetter</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {articles.length > 0 &&
            articles.map((article: any) => (
              <div key={article.id}>
                <div>
                  <img
                    src={article?.heroImg?.url}
                    alt={article?.heroImg?.alt}
                    loading="lazy"
                    className="rounded-md w-full h-auto"
                  />
                </div>
                <Link href={`/media/${article.slug}/`}>
                  <div className="font-semibold text-blue-900 text-xl underline pt-2">
                    {article.title}
                  </div>
                </Link>
                <div className="pb-6">
                  {article?._publishedAt &&
                    new Date(article?._publishedAt).toLocaleString()}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default MediaSlug;
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getMediaHomeData();

  return {
    props: {
      articles: data?.allArticles ? data.allArticles : null,
    },
  };
};
