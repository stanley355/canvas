import React from "react";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ScholarPageLayout from "@/modules/scholar/components/layout";
import ScholarSearchBox from "@/modules/scholar/components/SearchBox";

const ScholarPage = (props: any) => {
  const { query, serpResult } = props;

  return (
    <ScholarPageLayout>
      <h1 className="font-bold text-3xl lg:text-4xl text-center">
        Scholar Data
      </h1>
      <ScholarSearchBox />
      <h3 className="text-lg text-center mt-4">Knowledge is Power</h3>
    </ScholarPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let serpResult = [];

  if (query && query.q) {
    const apiURL = new URL(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`
    );
    Object.keys(query).forEach((key) => {
      apiURL.searchParams.set(key, String(query[key]));
    });

    const serpRes: any = await axios.get(String(apiURL));

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
