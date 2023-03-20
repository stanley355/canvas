import React from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import Footer from "@/common/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface IHomePageLayout {
  children: React.ReactNode;
}

const HomePageLayout = (props: IHomePageLayout) => {
  const { children } = props;

  return (
    <section>
      <header
        className={classNames(
          "py-4 px-2 text-center font-semibold text-3xl",
          inter.className
        )}
      >
        Data
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default HomePageLayout;
