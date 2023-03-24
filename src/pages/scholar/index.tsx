import React from "react";
import Router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

import { assignPageQueryToURL } from "@/common/lib/assignPageQueryToURL";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { SCHOLAR_DATO_SEO_QUERY } from "@/modules/scholar/lib/query";

import MetaSEO from "@/common/components/MetaSEO";
import ScholarPageLayout from "@/modules/scholar/components/Layout";
import SearchBox from "@/common/components/SearchBox";
import SerpScholarTable from "@/modules/scholar/components/SerpScholarTable";

const ScholarPage = (props: any) => {
  const { query, seo, serpScholar } = props;

  const ScholarPageHome = () => (
    <div className="container mx-auto flex flex-col items-center justify-center mt-12 px-4">
      <h1 className="font-bold text-3xl mb-4 lg:text-4xl">
        Scholar Research Data
      </h1>
      <SearchBox
        placeholder="What am I researching today?"
        onSubmit={(val) => Router.push(`/scholar?q=${val}`)}
        className="lg:w-2/3"
      />
      <div className="text-lg mt-4">Knowledge is Power</div>
    </div>
  );

  return (
    <ScholarPageLayout query={query}>
      <MetaSEO seo={seo} />
      {/* <ScholarPageHome /> */}
      <SerpScholarTable paperList={serpScholar.organic_results} />
    </ScholarPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let serpScholar;

  const datoSEO: any = await fetchDatoCms({
    query: SCHOLAR_DATO_SEO_QUERY,
    variables: "",
  });

  if (query && query.q) {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`);
    const queriedURL = assignPageQueryToURL(String(url), query);

    const { data } = await axios.get(String(queriedURL));

    serpScholar = data;
  }

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      query,
      seo: datoSEO?.scholar?.seo ?? null,
      serpScholar,
    },
  };
};

export default ScholarPage;
