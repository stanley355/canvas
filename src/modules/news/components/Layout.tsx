import React from "react";
import Link from "next/link";
import { FaBuffer, FaUserCircle } from "react-icons/fa";
import Footer from "@/common/components/Footer";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      <header className="py-4 px-2 border-b border-white">
        <div className="flex flex-row items-center justify-between">
          <button type="button" className="mr-2">
            <FaBuffer className="text-3xl" />
          </button>
          <div className="text-2xl italic">News Data</div>
          <Link href="/login" passHref>
            <FaUserCircle className="text-3xl" />
          </Link>
        </div>
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
