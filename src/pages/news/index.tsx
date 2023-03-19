import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getFromRedis } from "@/common/lib/getFromRedis";
import { storeToRedis } from "@/common/lib/storeToRedis";
import NewsPageLayout from "@/modules/news/components/Layout";
import { getHomeNewsData } from "@/modules/news/lib/getHomeNewsData";

const NewsPage = () => {
  return <NewsPageLayout query={{}}>hi</NewsPageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  // const prevData = await getFromRedis("news:home");

  // if (!prevData) {

  // }

  const newsData = await getHomeNewsData();

  console.log(newsData);

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      // nyt: nyt?.data?.results ?? null,
      // theGuardian: theGuardian?.data?.response?.results ?? null,
      // newsAPI: newsAPI?.data?.articles ?? null
    },
  };
};

export default NewsPage;
