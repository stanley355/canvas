import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SiTaichilang } from "react-icons/si";

import Layout from "@/common/components/Layout";
import { getMediaHomeData } from "@/modules/media/lib/getMediaHomeData";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import MediaHomeChildArticles from "@/modules/media/components/MediaHomeChildArticles";
import MediaHomeSideArticles from "@/modules/media/components/MediaHomeSideArticles";

interface IMediaHome {
  articles: Array<any>;
}

const MediaSlug = (props: IMediaHome) => {
  const { articles } = props;

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <div className="container bg-transparent mx-auto p-4 text-black min-h-screen">
          <div className="font-semibold text-2xl text-center my-4 flex items-center gap-2 justify-center">
            <SiTaichilang />
            <span>LanguageAI NewsLetter</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            {articles.length > 0 &&
              articles.slice(0, 4).map((article: any) => (
                <div
                  key={article.id}
                  className="h-80 border rounded-lg bg-gradient-to-b from-white via-blue-100 to-white shadow-lg shadow-slate-400"
                >
                  <div>
                    <img
                      src={article?.heroImg?.url}
                      alt={article?.heroImg?.alt}
                      loading="lazy"
                      className="rounded-md w-full h-auto max-h-40"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="p-2">
                    <Link href={`/media/${article.slug}/`}>
                      <div className=" hover:text-blue-900 text-xl hover:underline pt-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <MediaHomeChildArticles articles={articles} />
            <MediaHomeSideArticles articles={articles} />
          </div>
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
