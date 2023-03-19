import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getFromRedis } from "@/common/lib/getFromRedis";
import { storeToRedis } from "@/common/lib/storeToRedis";
import NewsPageLayout from "@/modules/news/components/Layout";
import { getHomeNewsData } from "@/modules/news/lib/getHomeNewsData";
import NewsHomeMainArticles from "@/modules/news/components/HomeMainArticles";
import NewsHomeSideArticles from "@/modules/news/components/HomeSideArticles";
import NewsHomeWeekendArticles from "@/modules/news/components/HomeWeekendArticles";

const NewsPage = (props: any) => {
  const { nyt, theGuardian, newsAPI } = props;
  console.log(newsAPI[0]);
  return (
    <NewsPageLayout query={{}}>
      <div className="lg:flex lg:flex-row">
        <NewsHomeMainArticles articles={nyt} />
        <NewsHomeSideArticles articles={theGuardian} />
      </div>
      <NewsHomeWeekendArticles articles={newsAPI} />
    </NewsPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let nyt = [];
  let theGuardian = [];
  let newsAPI = [];

  const REDIS_KEY = "news:home";

  const prevData = await getFromRedis(REDIS_KEY);

  // TODO: Reduce data fetching
  if (prevData) {
    nyt = prevData[0].value;
    theGuardian = prevData[1].value;
    newsAPI = prevData[2].value;
  } else {
    console.log(22, "red not found");
    const newsData = await getHomeNewsData();
    const storedData = await storeToRedis(REDIS_KEY, newsData);

    nyt = storedData[0].value;
    theGuardian = storedData[1].value;
    newsAPI = storedData[2].value;
  }

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      nyt,
      theGuardian,
      newsAPI,
    },
  };
};

export default NewsPage;
