import React from "react";
import { FaBookOpen } from "react-icons/fa";

interface IScholarResultSkeleton {
  organicResults: any[];
}

const ScholarResultSkeleton = (props: IScholarResultSkeleton) => {
  const { organicResults } = props;

//   console.log(organicResults);
  return (
    <div>
      <div className="p-4 border-b border-white flex flex-row items-center">
        <FaBookOpen className="text-lg mr-2" />
        <span>Scholar</span>
      </div>
      
    </div>
  );
};

export default ScholarResultSkeleton;
