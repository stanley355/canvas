import React from "react";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { assignPageQueryToURL } from "@/common/lib/assignPageQueryToURL";
import ScholarPageLayout from "@/modules/scholar/components/Layout";
import ScholarSearchBox from "@/modules/scholar/components/SearchBox";
import ScholarResultSkeleton from "@/modules/scholar/components/ResultSkeleton";

const ScholarPage = (props: any) => {
  const { query, serpResult } = props;

  const ScholarPageHome = () => (
    <div className="container mx-auto flex flex-col items-center justify-center p-4">
      <h1 className="font-bold text-3xl mb-4 lg:text-4xl">Scholar Data</h1>
      <ScholarSearchBox />
      <h3 className="text-lg mt-4">Knowledge is Power</h3>
    </div>
  );

  return (
    <ScholarPageLayout query={query}>
      {query && query.q ? (
        <ScholarResultSkeleton
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

  if (query && query.q) {
    const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`;
    const queriedURL = assignPageQueryToURL(targetURL, query);

    const serpRes: any = await axios.get(queriedURL);

    if (serpRes && serpRes.data) {
      serpResult = structuredClone(serpRes.data);
    }
  }

  return {
    props: {
      query,
      serpResult,
    },
  };
};

export default ScholarPage;
