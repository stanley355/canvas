import React from "react";
import Router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

import { assignPageQueryToURL } from "@/common/lib/assignPageQueryToURL";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { SCHOLAR_DATO_SEO_QUERY } from "@/modules/scholar/lib/query";

import ScholarPageLayout from "@/modules/scholar/components/Layout";
import ScholarResultSkeleton from "@/modules/scholar/components/ResultSkeleton";
import SearchBox from "@/common/components/SearchBox";
import MetaSEO from "@/common/components/MetaSEO";

const ScholarPage = (props: any) => {
  const { query, seo, serpResult } = props;

  const ScholarPageHome = () => (
    <div className="container mx-auto flex flex-col items-center justify-center mt-12 px-4">
      <h1 className="font-bold text-3xl mb-4 lg:text-4xl">Scholar Data</h1>
      <SearchBox
        placeholder="What am I researching today?"
        onSubmit={(val) => Router.push(`/scholar?q=${val}`)}
        className="lg:w-2/3"
      />
      <h3 className="text-lg mt-4">Knowledge is Power</h3>
    </div>
  );

  return (
    <ScholarPageLayout query={query}>
      <MetaSEO seo={seo} />
      {query && query.q ? (
        <ScholarResultSkeleton
          query={query}
          pagination={serpResult.pagination}
          searchInfo={serpResult.search_information}
          organicResults={serpResult.organic_results}
        />
      ) : (
        <ScholarPageHome />
      )}
    </ScholarPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let serpResult = [];

  const datoSEO: any = await fetchDatoCms({
    query: SCHOLAR_DATO_SEO_QUERY,
    variables: "",
  });

  if (query && query.q) {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`);
    const queriedURL = assignPageQueryToURL(String(url), query);

    const serpRes: any = await axios.get(String(queriedURL));

    if (serpRes && serpRes.data) {
      serpResult = structuredClone(serpRes.data);
    }
  }

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      query,
      seo: datoSEO?.scholar?.seo ?? null,
      serpResult,
    },
  };
};

export default ScholarPage;
