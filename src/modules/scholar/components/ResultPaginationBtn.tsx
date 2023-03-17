import React from "react";
import Link from "next/link";

const ScholarResultPaginationBtn = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-4">
      {[1, 2, 3, 4, 5].map((page: number) => (
        <Link href="/" key={page} className="px-1 border border-blue-200 text-lg rounded-sm mr-2">
          {page}
        </Link>
      ))}
    </div>
  );
};

export default ScholarResultPaginationBtn;
