import React from "react";
import ResultCard from "../ResultCard";
import ScholarResultHeader from "../ResultHeader";

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
            <ResultCard result={res} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarResultSkeleton;
