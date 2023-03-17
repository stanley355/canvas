import React from "react";
import { FaBookOpen } from "react-icons/fa";

const ScholarResultHeader = ({ searchInfo }: any) => {
  return (
    <div className="p-4 border-b border-white">
      <div className="container mx-auto flex flex-row items-center">
        <FaBookOpen className="text-lg mr-2" />
        <span>About {searchInfo.total_results} results</span>
        <span className="ml-2">({searchInfo.time_taken_displayed} sec)</span>
      </div>
    </div>
  );
};

export default ScholarResultHeader;
