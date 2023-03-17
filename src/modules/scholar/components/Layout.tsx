import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { FaBuffer, FaUserCircle } from "react-icons/fa";
import Footer from "@/common/components/Footer";
import ScholarSearchBox from "./SearchBox";

interface IScholarPageLayout {
  query: any;
  children: React.ReactNode;
}

const ScholarPageLayout = (props: IScholarPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      <header
        className={classNames(
          "py-4 px-2 flex flex-row items-center border-b border-white",
          query && query.q ? "" : "justify-between"
        )}
      >
        <button type="button" className="mr-2">
          <FaBuffer className="text-3xl" />
        </button>
        {query && query.q ? (
          <ScholarSearchBox query={query} />
        ) : (
          <Link href="/login">
            <FaUserCircle className="text-3xl" />
          </Link>
        )}
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default ScholarPageLayout;
