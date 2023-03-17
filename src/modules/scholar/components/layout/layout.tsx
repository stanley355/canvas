import React from "react";
import Link from "next/link";
import { FaBuffer, FaUserCircle } from "react-icons/fa";
import ScholarSearchBox from "../SearchBox";

interface IScholarPageLayout {
  query: any;
  children: React.ReactNode;
}

const ScholarPageLayout = (props: IScholarPageLayout) => {
  const { query, children } = props;

  return (
    <section>
      <nav className="py-4 px-2 flex flex-row items-center justify-between border-b border-white">
        <button type="button" className="mr-2">
          <FaBuffer className="text-3xl" />
        </button>
        {query && query.q ? (
          <ScholarSearchBox />
        ) : (
          <Link href="/login">
            <FaUserCircle className="text-3xl" />
          </Link>
        )}
      </nav>
      {children}
    </section>
  );
};

export default ScholarPageLayout;
