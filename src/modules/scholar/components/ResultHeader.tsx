import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaBookOpen, FaFilter } from "react-icons/fa";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const ScholarResultHeader = ({ query, searchInfo }: any) => {
  const [showFilter, setShowFilter] = useState(false);
  const isDesktop = useDesktopScreen();

  const ResultHeaderFilter = dynamic(() => import("./ResultHeaderFilter"), {});

  return (
    <div className="p-4 border-b border-white flex flex-row justify-between relative">
      <div className="container mx-auto flex flex-row items-center">
        <FaBookOpen className="text-xl mr-2" />
        <span>About {searchInfo.total_results} results</span>
        <span className="ml-2">({searchInfo.time_taken_displayed} sec)</span>
      </div>
      {!isDesktop && (
        <button
          type="button"
          onClick={() => setShowFilter(!showFilter)}
          className="flex flex-row items-center border rounded px-1"
        >
          <FaFilter className="mr-1" />
          <span>Filter</span>
        </button>
      )}
      {showFilter && <ResultHeaderFilter query={query} />}
    </div>
  );
};

export default ScholarResultHeader;
