import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SerpScholar from "./SerpScholar";

const newQueryClient = new QueryClient();


const ScholarSearchSkeleton = () => {

  return (
    <QueryClientProvider client={newQueryClient}>
      <div className="container mx-auto p-4 lg:px-0">
        <SerpScholar />
      </div>
    </QueryClientProvider>
  );
};

export default ScholarSearchSkeleton;
