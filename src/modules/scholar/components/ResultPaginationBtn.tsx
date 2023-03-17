import React from "react";
import classNames from "classnames";
import Link from "next/link";

const ScholarResultPaginationBtn = ({ pagination }: any) => {
  return (
    <div className="flex flex-row items-center justify-center mt-4">
      {[1, 2, 3, 4, 5].map((page: number) => (
        <Link
          href="/"
          key={page}
          className={classNames(
            "px-1 border border-blue-200 text-lg rounded-sm mr-2",
            pagination.current === page ? "bg-white text-black" : ""
          )}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default ScholarResultPaginationBtn;
