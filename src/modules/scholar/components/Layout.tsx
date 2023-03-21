import React from "react";
import Router from "next/router";
import { FaGraduationCap } from "react-icons/fa";
import SearchNavbar from "@/common/components/SearchNavbar";
import Footer from "@/common/components/Footer";

interface IScholarPageLayout {
  query: any;
  children: React.ReactNode;
}

const ScholarPageLayout = (props: IScholarPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      {query && query.q ? (
        <SearchNavbar
          pageTitle="Scholar Research"
          basePagePath="/scholar/"
          pageIcon={<FaGraduationCap className="text-3xl mx-2 lg:mx-4" />}
          searchPlaceHolder={
            query && query.q ? query.q : "What am I researching today?"
          }
          onSearchSubmit={(val) => Router.push(`/scholar?q=${val}`)}
        />
      ) : (
        <FaGraduationCap className="text-3xl mx-auto my-4" />
      )}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default ScholarPageLayout;
