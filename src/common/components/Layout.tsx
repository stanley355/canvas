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
    <>
      {showPaidNotice && (
        <PaidNotice
          onClick={() => {
            Cookies.set("paid_notice", "shown", { expires: 2 });
            setShowPaidNotice(false);
            return;
          }}
        />
      )}
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
