import React from "react";
import Link from "next/link";

const ScholarResultHeaderFilter = ({ query }: any) => {
  const currentYear = new Date().getFullYear();

  const FILTER_OPTIONS = [
    {
      label: "Any Time",
      query: "",
      value: "",
    },
    {
      label: `Since ${currentYear}`,
      query: "as_ylo",
      value: currentYear,
    },
    {
      label: `Since ${currentYear - 1}`,
      query: "as_ylo",
      value: currentYear - 1,
    },
    {
      label: `Since ${currentYear - 4}`,
      query: "as_ylo",
      value: currentYear - 4,
    },
    {
      label: "Sort by Date",
      query: "scisbd",
      value: 2,
    },
    {
      label: "Sort by Relevance",
      query: "scisbd",
      value: 0,
    },
  ];

  const createFilterLink = (key: string, value: string) => {
    const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}scholar`;
    const url = new URL(targetURL);
    url.searchParams.set("q", query.q);
    url.searchParams.set(key, value);

    return String(url);
  };

  return (
    <div className="absolute right-4 top-12 bg-white w-1/2 text-black flex flex-col rounded-sm">
      {FILTER_OPTIONS.map((option, index) => (
        <Link
          href={createFilterLink(option.query, String(option.value))}
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
