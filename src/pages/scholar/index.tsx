import React from "react";
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

export default ScholarPage;
