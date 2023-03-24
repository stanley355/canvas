import React from "react";
import SerpScholar from "./SerpScholar";

interface IScholarSearchSkeleton {
  searchQuery: string;
  serpPaperList: any[];
}

const ScholarSearchSkeleton = (props: IScholarSearchSkeleton) => {
  const { searchQuery, serpPaperList } = props;

  return (
    <div className="container mx-auto">
      <div>Showing Results for {searchQuery}</div>
      <SerpScholar paperList={serpPaperList} />
    </div>
  );
};

export default ScholarSearchSkeleton;
