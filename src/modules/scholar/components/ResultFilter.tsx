import React from "react";
import Link from "next/link";
import { createFilterLink } from "../lib/createFilterLink";
import { SCHOLAR_FILTER_OPTIONS } from "../lib/constant";

const ScholarResultFilter = ({ query }: any) => {
  return (
    <div className="sticky bg-white w-1/2 text-black flex flex-col rounded-sm">
      {SCHOLAR_FILTER_OPTIONS.map((option, index) => (
        <Link
          href={createFilterLink(query, option.query, String(option.value))}
          key={index}
          className="p-4 border-b border-blue-200"
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default ScholarResultFilter;
