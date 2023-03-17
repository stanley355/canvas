import React from "react";
import { FaBookOpen, FaFilter } from "react-icons/fa";
import useMobileScreen from "@/common/lib/isMobile";

const ScholarResultHeader = ({ searchInfo }: any) => {
  const isMobile = useMobileScreen();

  return (
    <div className="p-4 border-b border-white flex flex-row justify-between">
      <div className="container mx-auto flex flex-row items-center">
        <FaBookOpen className="text-xl mr-2" />
        <span>About {searchInfo.total_results} results</span>
        <span className="ml-2">({searchInfo.time_taken_displayed} sec)</span>
      </div>
      {isMobile && (
        <button
          type="button"
          className="flex flex-row items-center border rounded px-1"
        >
          <FaFilter className="mr-1" />
          <span>Filter</span>
        </button>
      )}
    </div>
  );
};

export default ScholarResultHeader;
