import React from "react";
import SerpScholar from "./SerpScholar";

interface IScholarSearchSkeleton {
  serpPaperList: any[];
}

const ScholarSearchSkeleton = (props: IScholarSearchSkeleton) => {
  const { serpPaperList } = props;

  return (
    <div className="container mx-auto">
      <SerpScholar paperList={serpPaperList} />
    </div>
  );
};

export default ScholarSearchSkeleton;
