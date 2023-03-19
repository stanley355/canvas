import React from "react";
import Link from "next/link";
import { FaBuffer, FaUserCircle } from "react-icons/fa";
import { useDesktopScreen } from "@/common/lib/useDesktopScreen";
// import useMobileScreen from "@/common/lib/useMobileScreen";
import NewsSearchBox from "./SearchBox";
import Footer from "@/common/components/Footer";

interface INewsPageLayout {
  query: any;
  children: React.ReactNode;
}

const NewsPageLayout = (props: INewsPageLayout) => {
  const { query, children } = props;

  const isDesktop = useDesktopScreen();

  const MobileView = () => (
    <div className="flex flex-row items-center justify-between">
      <button type="button" className="mr-2">
        <FaBuffer className="text-3xl" />
      </button>
      <div className="text-2xl italic">News Data</div>
      <Link href="/login" passHref>
        <FaUserCircle className="text-3xl" />
      </Link>
    </div>
  );

  const DesktopView = () => (
    <div className="flex flex-row items-center">
      <div className="text-2xl italic mr-4">News Data</div>
      <NewsSearchBox query={query} />
    </div>
  );

  return (
    <section className="relative">
      <header className="py-4 px-2 border-b border-white">
        {!isDesktop ? <MobileView /> : <DesktopView />}
      </header>
      {!isDesktop && !query.q && <NewsSearchBox /> }
      <main className="min-h-screen container mx-auto">{children}</main>
      <Footer />
    </section>
  );
};

export default NewsPageLayout;
