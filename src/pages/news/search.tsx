import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import NewsPageLayout from "@/modules/news/components/Layout";
import { getSearchNewsData } from "@/modules/news/lib/getSearchNewsData";

const NewsSearchPage = (props: any) => {
  const { nyt, theGuardian, newsAPI } = props;

  console.log(nyt);
  //   console.log(nyt.length);
  //   console.log(theGuardian.length);
  //   console.log(newsAPI.length);
  return <NewsPageLayout query={{}}>

    
  </NewsPageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const newsData: any = await getSearchNewsData(String(query.q));

  let nyt = newsData[0].value;
  let theGuardian = newsData[1].value;
  let newsAPI = newsData[2].value;

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

export default NewsSearchPage;
