import React from "react";
import { useRouter } from "next/router";
import { FaGraduationCap } from "react-icons/fa";
import SearchNavbar from "@/common/components/SearchNavbar";
import Footer from "@/common/components/Footer";

interface IScholarPageLayout {
  children: React.ReactNode;
}

const ScholarPageLayout = (props: IScholarPageLayout) => {
  const { children } = props;

  const router = useRouter();
  const searchQuery =
    router && router.query.q ? String(router.query.q) : "What am I Researching Today";

  return (
    <section className="relative">
      {router.query && router.query.q ? (
        <SearchNavbar
          pageTitle="Scholar Research"
          basePagePath="/scholar/"
          pageIcon={<FaGraduationCap className="text-3xl mx-2 lg:mx-4" />}
          searchPlaceHolder={searchQuery}
          onSearchSubmit={(val) => router.push(`/scholar?q=${val}`)}
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
