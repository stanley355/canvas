import React from "react";
import axios from "axios";
import NewsPageLayout from "@/modules/news/components/Layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const NewsPage = () => {
  return <NewsPageLayout query={{}}>hi</NewsPageLayout>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const nyt = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/nyt/`, {
    headers: { path: "svc/topstories/v2/home.json" },
  });

  // console.log(nyt.data.results);

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
};

export default NewsPage;
