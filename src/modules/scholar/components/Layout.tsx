import React from "react";
import Router from "next/router";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import classNames from "classnames";
import SearchBox from "@/common/components/SearchBox";
import Footer from "@/common/components/Footer";

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
          "py-4",
          query && query.q ? "flex flex-row items-start border-b pr-2" : ""
        )}
      >
        <Link href="/scholar/" passHref title="scholar research">
          <FaGraduationCap
            className={classNames(
              "text-3xl",
              query && query.q ? "mx-2 lg:mx-4" : "mx-auto"
            )}
          />
        </Link>
        {query && query.q ? (
          <SearchBox
            className="lg:w-2/3"
            placeholder={query.q}
            onSubmit={(val) => Router.push(`/scholar?q=${val}`)}
          />
        ) : (
          <></>
        )}
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default ScholarPageLayout;
