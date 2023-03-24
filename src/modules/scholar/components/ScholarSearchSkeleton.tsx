import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SerpScholar from "./SerpScholar";

const newQueryClient = new QueryClient();

interface IScholarSearchSkeleton {
  serpPaperList: any[];
}

const ScholarSearchSkeleton = (props: IScholarSearchSkeleton) => {
  const { serpPaperList } = props;

  return (
    <QueryClientProvider client={newQueryClient}>
      <div className="container mx-auto p-4 lg:px-0">
        <SerpScholar paperList={serpPaperList} />
      </div>
    </QueryClientProvider>
  );
};

export default ScholarSearchSkeleton;
