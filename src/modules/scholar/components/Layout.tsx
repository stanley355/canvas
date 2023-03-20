import React from "react";
import SearchBox from "@/common/components/SearchBox";
import { FaGraduationCap} from "react-icons/fa";
import Footer from "@/common/components/Footer";

interface IScholarPageLayout {
  query: any;
  children: React.ReactNode;
}

const ScholarPageLayout = (props: IScholarPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      <header className="py-4">
        <FaGraduationCap className="mx-auto text-3xl" />
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default ScholarPageLayout;
