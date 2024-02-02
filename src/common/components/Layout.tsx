import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className={inter.className}>
      {!router.pathname.includes("document") && <Header />}
      <main className="h-min-screen pt-16 lg:pt-12">{children}</main>
      {!router.pathname.includes("document") && <Footer />}
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
