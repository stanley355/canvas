import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import PaidNotice from "./PaidNotice";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("paid_notice");
  const [showPaidNotice, setShowPaidNotice] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowPaidNotice(true);
    }

    () => {
      setShowPaidNotice(false);
    };
  }, [token]);

  return (
    <div className={inter.className}>
      <Header />
      <main className="h-min-screen pt-16 lg:pt-12">{children}</main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Layout;
