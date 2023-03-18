import React from "react";
import Link from "next/link";
import { createFilterLink } from "../lib/createFilterLink";
import { SCHOLAR_FILTER_OPTIONS } from "../lib/constant";

const ScholarResultHeaderFilter = ({ query }: any) => {
  return (
    <div className="absolute right-4 top-12 bg-white w-1/2 text-black flex flex-col rounded-sm">
      {SCHOLAR_FILTER_OPTIONS.map((option, index) => (
        <Link
          passHref
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

export default ScholarResultHeaderFilter;
