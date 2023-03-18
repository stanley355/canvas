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
      <header className="py-4 px-2 border-b border-white">
        {query && query.q ? (
          <div className="container mx-auto">
            <ScholarSearchBox query={query} />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between">
            <button type="button" className="mr-2">
              <FaBuffer className="text-3xl" />
            </button>
            <Link href="/login" passHref>
              <FaUserCircle className="text-3xl" />
            </Link>
          </div>
        )}
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default ScholarPageLayout;
