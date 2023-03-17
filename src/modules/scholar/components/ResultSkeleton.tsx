import React from "react";
import Link from "next/link";
import ScholarResultCard from "./ResultCard";
import ScholarResultHeader from "./ResultHeader";
import ScholarResultPaginationBtn from "./ResultPaginationBtn";

interface IScholarResultSkeleton {
  searchInfo: any;
  organicResults: any[];
}

const ScholarResultSkeleton = (props: IScholarResultSkeleton) => {
  const { searchInfo, organicResults } = props;


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
      <ScholarResultPaginationBtn />
    </div>
  );
};

export default ScholarResultSkeleton;
