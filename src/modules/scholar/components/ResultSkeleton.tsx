import React from "react";
import Link from "next/link";
import ScholarResultCard from "./ResultCard";
import ScholarResultHeader from "./ResultHeader";
import ScholarResultPaginationBtn from "./ResultPaginationBtn";

interface IScholarResultSkeleton {
  query: any;
  searchInfo: any;
  organicResults: any[];
  pagination: any;
}

const ScholarResultSkeleton = (props: IScholarResultSkeleton) => {
  const { query, searchInfo, organicResults, pagination } = props;

  return (
    <div>
      <ScholarResultHeader searchInfo={searchInfo} />
      <div className="container mx-auto">
        {organicResults.map((res) => (
          <div key={res.position}>
            <ScholarResultCard result={res} />
          </div>
        ))}
      </div>
      <ScholarResultPaginationBtn query={query} pagination={pagination} />
    </div>
  );
};

export default ScholarResultSkeleton;
