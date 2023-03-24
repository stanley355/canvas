import React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { SCHOLAR_DATO_SEO_QUERY } from "@/modules/scholar/lib/query";

import MetaSEO from "@/common/components/MetaSEO";
import ScholarPageLayout from "@/modules/scholar/components/Layout";
import ScholarHome from "@/modules/scholar/components/ScholarHome";
import ScholarSearchSkeleton from "@/modules/scholar/components/ScholarSearchSkeleton";

const ScholarPage = (props: any) => {
  const { seo } = props;
  const router = useRouter();

  return (
    <ScholarPageLayout>
      <MetaSEO seo={seo} />

      {router.query && router.query.q ? (
        <ScholarSearchSkeleton />
      ) : (
        <ScholarHome />
      )}
    </ScholarPageLayout>
  );
};

export default ScholarPage;
export const getStaticProps: GetStaticProps = async () => {
  const dato: any = await fetchDatoCms({
    query: SCHOLAR_DATO_SEO_QUERY,
    variables: "",
  });

  return {
    props: {
      seo: dato?.scholar?.seo ?? null,
    },
  };
};
