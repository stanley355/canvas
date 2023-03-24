import React from "react";
import Router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

import { assignPageQueryToURL } from "@/common/lib/assignPageQueryToURL";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { SCHOLAR_DATO_SEO_QUERY } from "@/modules/scholar/lib/query";

import MetaSEO from "@/common/components/MetaSEO";
import ScholarPageLayout from "@/modules/scholar/components/Layout";
import ScholarHome from "@/modules/scholar/components/ScholarHome";
import ScholarSearchSkeleton from "@/modules/scholar/components/ScholarSearchSkeleton";
import SerpScholar from "@/modules/scholar/components/SerpScholar";
import SerpScholarTable from "@/modules/scholar/components/SerpScholarTable";

const ScholarPage = (props: any) => {
  const { query, seo, serpScholar } = props;

  return (
    <ScholarPageLayout query={query}>
      <MetaSEO seo={seo} />

      {query && query.q ? (
        <ScholarSearchSkeleton
          searchQuery={query.q}
          serpPaperList={serpScholar.organic_results ?? []}
        />
      ) : (
        <ScholarHome />
      )}
    </ScholarPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let serpScholar = null;

  const datoSEO: any = await fetchDatoCms({
    query: SCHOLAR_DATO_SEO_QUERY,
    variables: "",
  });

  // if (query && query.q) {
  //   const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`);
  //   url.searchParams.set("num", "20");
  //   const queriedURL = assignPageQueryToURL(String(url), query);

  //   const { data } = await axios.get(String(queriedURL));

  //   serpScholar = data;
  // }

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
