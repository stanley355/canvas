import React from "react";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";

const ScholarResultCard = ({ result }: any) => (
  <div className="p-4 lg:px-0 border-b border-white lg:w-2/3">
    <Link
      href={result.link}
      className="font-semibold text-xl text-blue-200 underline"
    >
      {result.title}
    </Link>
    <div className="flex flex-row items-center">
      <FaQuoteLeft className="mr-2" />
      <span>Cited: {result.inline_links.cited_by.total}</span>
    </div>
    {/* TODO: Create scholar author page */}
    <div className="italic">{result.publication_info.summary}</div>
    <div>{result.snippet}</div>
  </div>
);

export default ScholarResultCard;
