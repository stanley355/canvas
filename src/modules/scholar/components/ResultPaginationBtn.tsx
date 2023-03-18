import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { assignPageQueryToURL } from "@/common/lib/assignPageQueryToURL";

interface IScholarResultPagination {
  query: any;
  pagination: any;
}

const ScholarResultPaginationBtn = (props: IScholarResultPagination) => {
  const { query, pagination } = props;

  const createLinkURL = (pageNum: number) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}scholar`;
    const queriedURL = assignPageQueryToURL(baseUrl, query);

    queriedURL.searchParams.set("start", String(pageNum * 10));

    if (queriedURL) return String(queriedURL);
    return "/scholar/";
  };

  return (
    <div className="flex flex-row items-center justify-center my-4 lg:w-2/3">
      {[0, 1, 2, 3, 4].map((page: number) => (
        <Link
          href={createLinkURL(page)}
          key={page}
          className={classNames(
            "px-1 text-lg mr-2",
            pagination.current === page + 1 ? "border border-black rounded-sm" : ""
          )}
        >
          {page + 1}
        </Link>
      ))}
    </div>
  );
};

export default ScholarResultPaginationBtn;
