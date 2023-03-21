import React, { use } from "react";
import Router from "next/router";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa";
import SearchBox from "@/common/components/SearchBox";
import SideNavbarBtn from "@/common/components/SideNavbarBtn";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import Footer from "@/common/components/Footer";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  const isDesktop = useDesktopScreen();

  return (
    <section className="relative">
      <header className="py-4 px-2 border-b border-white flex flex-row items-center justify-between">
        <Link href="/news/" passHref title="news">
        <FaNewspaper className="text-3xl mx-2 lg:mx-4" />
        </Link>
        <SearchBox
          placeholder={query && query.q ? query.q : "What's my news today?"}
          onSubmit={(val) => Router.push(`/news/search?q=${val}`)}
        />
        {isDesktop && <SideNavbarBtn />}
      </header>
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
