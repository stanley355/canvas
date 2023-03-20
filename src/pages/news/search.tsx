import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import NewsPageLayout from "@/modules/news/components/Layout";

const NewsSearchPage = () => {
  return <NewsPageLayout query={{}}>hi</NewsPageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  let nyt = [];
  let theGuardian = [];
  let newsAPI = [];
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      // nyt,
      // theGuardian,
      // newsAPI,
    },
  };
};

export default NewsSearchPage;
