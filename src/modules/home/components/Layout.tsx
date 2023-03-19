import React from "react";
import classNames from "classnames";
import Footer from "@/common/components/Footer";

interface IHomePageLayout {
  children: React.ReactNode;
}

const HomePageLayout = (props: IHomePageLayout) => {
  const { children } = props;

  return (
    <section>
      <header className="py-4 px-2 border-b text-center font-semibold text-3xl italic">
        Data
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  );
};

export default HomePageLayout;
