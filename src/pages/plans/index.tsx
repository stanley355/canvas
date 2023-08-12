import React from "react";
import Link from "next/link";

import Layout from "@/common/components/Layout";
import PlanComparisonTable from "@/modules/plans/components/PlanComparisonTable";
import TransQualityComparisonTable from "@/modules/plans/components/TransQualityComparisonTable";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import PlanOptions from "@/modules/plans/components/PlanOptions";

export const PlansSection = () => (
  <div className="container mx-auto bg-white text-black p-4 lg:p-8" id="start">
    <PlanOptions />
    <PlanComparisonTable />
    <TransQualityComparisonTable />
    <div className="my-8 flex flex-col items-center">
      <div className="text-3xl font-semibold">Satisfied with Our AI?</div>
      <div className="text-lg mb-8">What are you waiting for?</div>
      <Link
        href="/plans/"
        className="border border-gray-500 rounded-[2rem] bg-[#feff69] text-lg font-semibold p-4"
      >
        Get started
      </Link>
    </div>
  </div>
);

const Plans = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-300 to-white">
        <PlansSection />
      </div>
    </Layout>
  );
};

export default Plans;
