import React from "react";
import useMobileScreen from "@/common/lib/useMobileScreen";
import ScholarResultCard from "./ResultCard";
import ScholarResultHeader from "./ResultHeader";
import ScholarResultPaginationBtn from "./ResultPaginationBtn";
import ScholarResultFilter from "./ResultFilter";

interface IScholarResultSkeleton {
  query: any;
  searchInfo: any;
  organicResults: any[];
  pagination: any;
}

const ScholarResultSkeleton = (props: IScholarResultSkeleton) => {
  const { query, searchInfo, organicResults, pagination } = props;

  const isMobile = useMobileScreen();

  return (
    <div>
      <ScholarResultHeader query={query} searchInfo={searchInfo} />
      <div className="container mx-auto lg:flex lg:flex-row lg:gap-4 lg:justify-between">
        <div className="lg:w-2/3">
          {organicResults.map((res) => (
            <div key={res.position}>
              <ScholarResultCard result={res} />
            </div>
          ))}
        </div>
        {!isMobile && <ScholarResultFilter query={query} />}
      </div>
      <ScholarResultPaginationBtn query={query} pagination={pagination} />
    </div>
  );
};

export default ScholarResultSkeleton;
