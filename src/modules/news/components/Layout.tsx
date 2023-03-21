import React from "react";
import Router from "next/router";
import { FaNewspaper } from "react-icons/fa";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { NEWS_SECTIONS } from "../lib/constant";
import SearchNavbar from "@/common/components/SearchNavbar";
import Footer from "@/common/components/Footer";
import Button from "@/common/components/Button";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  const isDesktop = useDesktopScreen();

  return (
    <section className="relative">
      <SearchNavbar
        pageTitle="News"
        basePagePath="/news/"
        pageIcon={<FaNewspaper className="text-3xl mx-2 lg:mx-4" />}
        searchPlaceHolder={query && query.q ? query.q : "What's my news today?"}
        onSearchSubmit={(val) => Router.push(`/news/search?q=${val}`)}
      />
      {isDesktop && (
        <div className="w-full border-b py-2">
          <div className="container mx-auto flex flex-row justify-evenly text-lg">
            {NEWS_SECTIONS.map((section) => (
              <Button
                type="link"
                key={section.title}
                href={section.href}
                buttonClassName="p-2 hover:text-black hover:bg-white"
                title={section.title}
              />
            ))}
          </div>
        </div>
      )}
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
