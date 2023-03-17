import React from "react";
import { FaBookOpen } from "react-icons/fa";
import ResultCard from "../ResultCard";

interface IScholarResultSkeleton {
  organicResults: any[];
}

const ScholarResultSkeleton = (props: IScholarResultSkeleton) => {
  const { organicResults } = props;

  return (
    <div>
      <div className="p-4 border-b border-white flex flex-row items-center">
        <FaBookOpen className="text-lg mr-2" />
        <span>Scholar</span>
      </div>
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
