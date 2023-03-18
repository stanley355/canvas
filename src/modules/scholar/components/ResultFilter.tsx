import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { createFilterLink } from "../lib/createFilterLink";
import { SCHOLAR_FILTER_OPTIONS } from "../lib/constant";

const ScholarResultFilter = ({ query }: any) => {
  return (
    <div className="sticky bg-white w-1/4 mt-4 text-black flex flex-col rounded-sm h-fit">
      <div className="flex flex-row items-center font-bold p-4 text-lg">
        <FaFilter className="mr-1" />
        <span>Filter</span>
      </div>
      {SCHOLAR_FILTER_OPTIONS.map((option, index) => (
        <Link
          passHref
          href={createFilterLink(query, option.query, String(option.value))}
          key={index}
          className="p-4 border-b border-blue-200 hover:bg-black hover:text-white"
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default ScholarResultFilter;
