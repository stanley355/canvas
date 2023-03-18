import React from "react";
import NewsPageLayout from "@/modules/news/components/Layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const NewsPage = () => {
  return <NewsPageLayout query={{}}>hi</NewsPageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
};

export default NewsPage;
