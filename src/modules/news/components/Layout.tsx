import React from "react";
import Router from "next/router";
import { FaNewspaper } from "react-icons/fa";
import SearchBox from "@/common/components/SearchBox";
import Footer from "@/common/components/Footer";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      <header className="py-4 px-2  lg:pr-8 border-b border-white flex flex-row items-center">
        <FaNewspaper className="text-3xl mx-2 lg:mx-4" />
        <SearchBox
          placeholder={query && query.q ? query.q : "What's my news today?"}
          onSubmit={(val) => Router.push(`/news/search?q=${val}`)}
        />
      </header>
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
