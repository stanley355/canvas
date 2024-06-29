import { useMemo } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const hasFooter = useMemo(() => {
    return ["/", "/plans", "/students"].includes(router.pathname);
  }, [router.pathname]);

  return (
    <div className={inter.className}>
      <Header
        isSimpleHeader={["/login", "/students/application"].includes(router.asPath)}
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
    </div>
  );
};

export default Layout;
