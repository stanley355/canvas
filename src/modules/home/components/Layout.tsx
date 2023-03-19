import React from "react";
import Link from "next/link";
import { FaBuffer, FaUserCircle } from "react-icons/fa";
import Footer from "@/common/components/Footer";

interface IHomePageLayout {
  children: React.ReactNode;
}

const HomePageLayout = (props: IHomePageLayout) => {
  const { children } = props;

  return (
    <section>
      <header className="py-4 px-2 border-b flex flex-row justify-between">
        <button type="button" className="mr-2">
          <FaBuffer className="text-3xl" />
        </button>
        <Link href="/login" passHref>
          <FaUserCircle className="text-3xl" />
        </Link>
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default HomePageLayout;
