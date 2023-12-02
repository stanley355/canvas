import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("paid_notice");

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
