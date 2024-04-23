import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const hasFooter = useMemo(() => {
    return ["/", "/plans", "/students"].includes(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <Header
        isLoginPage={router.asPath === "/login"}
        pathname={router.pathname}
      />
      <main>{children}</main>
      {hasFooter && <Footer />}
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
