import React from "react";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={classNames("h-screen", inter.className)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
