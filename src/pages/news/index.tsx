import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getFromRedis } from "@/common/lib/getFromRedis";
import { storeToRedis } from "@/common/lib/storeToRedis";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { getHomeNewsData } from "@/modules/news/lib/getHomeNewsData";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { NEWS_SEO_QUERY } from "@/modules/news/lib/query";
import NewsPageLayout from "@/modules/news/components/Layout";
import NewsHomeMainArticles from "@/modules/news/components/HomeMainArticles";
import NewsHomeSideArticles from "@/modules/news/components/HomeSideArticles";
import NewsHomeAdditionalArticles from "@/modules/news/components/HomeAdditionalArticles";
import MetaSEO from "@/common/components/MetaSEO";

const NewsPage = (props: any) => {
  const { seo, nyt, theGuardian, newsAPI } = props;

  const isDesktop = useDesktopScreen();
  console.log(newsAPI[0]);

  return (
    <NewsPageLayout query={{}}>
      <MetaSEO seo={seo} />
      <div className="lg:flex lg:flex-row">
        <NewsHomeMainArticles articles={nyt.slice(0, isDesktop ? 2 : 5)} />
        <NewsHomeSideArticles articles={theGuardian.slice(0, 5)} />
      </div>
      <NewsHomeAdditionalArticles
        title="What to watch and read this weekend"
        articles={newsAPI.slice(0, 8)}
      />
      <div className="flex flex-row border-b">
        <NewsHomeSideArticles articles={theGuardian.slice(5)} />
        <NewsHomeMainArticles
          articles={nyt.slice(isDesktop ? 2 : 5, isDesktop ? 4 : 3)}
        />
      </div>
      <NewsHomeAdditionalArticles
        title="Trending"
        articles={newsAPI.slice(8, 24)}
      />
    </NewsPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const datoSEO: any = await fetchDatoCms({
    query: NEWS_SEO_QUERY,
    variables: "",
  });

  let nyt = [];
  let theGuardian = [];
  let newsAPI = [];

  const REDIS_KEY = "news:home";

  const prevData = await getFromRedis(REDIS_KEY);

  // TODO: Reduce data fetching
  if (prevData && prevData.length && prevData.length > 0) {
    nyt = prevData[0].value;
    theGuardian = prevData[1].value;
    newsAPI = prevData[2].value;
  } else {
    const newsData: any = await getHomeNewsData();
    await storeToRedis(REDIS_KEY, 60 * 60 * 3, newsData); // 3 hours

    nyt = newsData[0].value;
    theGuardian = newsData[1].value;
    newsAPI = newsData[2].value;
  }

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      seo: datoSEO?.news?.seo ?? null,
      nyt,
      theGuardian,
      newsAPI,
    },
  };
};

export default NewsPage;
