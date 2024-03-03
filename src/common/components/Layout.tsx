import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const hasFooter = useMemo(() => {
    return !["/login", "/account", "/account/subscription"].includes(router.pathname);
  }, [router.asPath]);

  return (
    <>
      <Header isLoginPage={router.asPath === "/login"} />
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
