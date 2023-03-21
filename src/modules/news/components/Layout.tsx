import React from "react";
import Router from "next/router";
import { FaNewspaper } from "react-icons/fa";
import SearchNavbar from "@/common/components/SearchNavbar";
import Footer from "@/common/components/Footer";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  return (
    <section className="relative">
      <SearchNavbar
        pageTitle="News"
        basePagePath="/news/"
        pageIcon={<FaNewspaper className="text-3xl mx-2 lg:mx-4" />}
        searchPlaceHolder={query && query.q ? query.q : "What's my news today?"}
        onSearchSubmit={(val) => Router.push(`/news/search?q=${val}`)}
      />
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
