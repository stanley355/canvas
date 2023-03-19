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
  const newsBaseEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/news/`;
  const nyt = await axios.get(`${newsBaseEndpoint}nyt/`, {
    headers: { path: "svc/topstories/v2/home.json" },
  });

  const theGuardian = await axios.get(`${newsBaseEndpoint}guardian/`, {
    headers: { path: "search" },
  });


  const newsAPI = await axios.get(`${newsBaseEndpoint}?q=world`, {
    headers: { path: "everything" },
  });


  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      nyt: nyt?.data?.results ?? null,
      theGuardian: theGuardian?.data?.response?.results ?? null,
      newsAPI: newsAPI?.data?.articles ?? null
    },
  };
};

export default NewsPage;
