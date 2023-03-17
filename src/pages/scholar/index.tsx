import React from "react";
import Router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ScholarPageLayout from "@/modules/scholar/components/layout";
import ScholarSearchBox from "@/modules/scholar/components/SearchBox";

const ScholarPage = () => {
  return (
    <ScholarPageLayout>
      <h1 className="font-bold text-3xl lg:text-4xl text-center">Scholar Data</h1>
      <ScholarSearchBox />
    </ScholarPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
  ) => {
    const { query } = context;
  
    return {
      props: {
        query,
      },
    };
  };
  

export default ScholarPage;
