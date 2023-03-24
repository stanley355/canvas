import React from "react";
import { useRouter } from "next/router";
import MetaSEO from "@/common/components/MetaSEO";
import ScholarPageLayout from "@/modules/scholar/components/Layout";
import ScholarHome from "@/modules/scholar/components/ScholarHome";
import ScholarSearchSkeleton from "@/modules/scholar/components/ScholarSearchSkeleton";

const ScholarPage = (props: any) => {
  const { query, seo, serpScholar } = props;
  const router = useRouter();

  return (
    <ScholarPageLayout query={query}>
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
