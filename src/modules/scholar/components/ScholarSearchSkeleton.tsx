import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SerpScholar from "./SerpScholar";
import SemanticScholar from "./SemanticScholar";

const newQueryClient = new QueryClient();


const ScholarSearchSkeleton = () => {

  return (
    <QueryClientProvider client={newQueryClient}>
      <div className="container mx-auto p-4 lg:px-0">
        {/* <SerpScholar /> */}
        <SemanticScholar />
      </div>
    </QueryClientProvider>
  );
};

export default ScholarSearchSkeleton;
