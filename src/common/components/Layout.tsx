import { useMemo } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isSimpleHeader = useMemo(() => {
    return ["/login", "/students/application"].includes(router.pathname);
  }, [router.pathname]);

  return (
    <div className={inter.className}>
      <Header isSimpleHeader={isSimpleHeader} pathname={router.pathname} />
      <main>{children}</main>
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
