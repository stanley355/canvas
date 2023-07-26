import React from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main
        className={classNames("h-min-screen pt-16 lg:pt-12", inter.className)}
      >
        {children}
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
