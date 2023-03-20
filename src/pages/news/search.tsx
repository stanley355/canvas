import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import NewsPageLayout from "@/modules/news/components/Layout";
import { getFromRedis } from "@/common/lib/getFromRedis";
import { storeToRedis } from "@/common/lib/storeToRedis";
import { getSearchNewsData } from "@/modules/news/lib/getSearchNewsData";
import NYTSearchResults from "@/modules/news/components/NYTSearchResults";
import NewsAPISearchResults from "@/modules/news/components/NewsAPISearchResults";

const NewsSearchPage = (props: any) => {
  const { query, nyt, theGuardian, newsAPI } = props;

  console.log(newsAPI[0])
  return (
    <NewsPageLayout query={query}>
      <div className="border-b text-center py-2">
        Showing {nyt.length + theGuardian.length + newsAPI.length} News
      </div>
      {/* <NYTSearchResults articles={nyt}/> */}
      <NewsAPISearchResults articles={newsAPI}/>
    </NewsPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  //   TODO: Remove static redis cache
  let nyt = [];
  let theGuardian = [];
  let newsAPI = [];

  const REDIS_KEY = "news:search";

  const prevData = await getFromRedis(REDIS_KEY);

  if (prevData && prevData.length > 0) {
    nyt = prevData[0].value;
    theGuardian = prevData[1].value;
    newsAPI = prevData[2].value;
  } else {
    const newsData = await getSearchNewsData(String(query.q));
    const storedData = await storeToRedis(REDIS_KEY, newsData);

    nyt = storedData[0].value;
    theGuardian = storedData[1].value;
    newsAPI = storedData[2].value;
  }

  //   const newsData: any = await getSearchNewsData(String(query.q));

  //   let nyt = newsData[0].value;
  //   let theGuardian = newsData[1].value;
  //   let newsAPI = newsData[2].value;

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      query,
      nyt,
      theGuardian,
      newsAPI,
    },
  };
};

export default NewsSearchPage;
