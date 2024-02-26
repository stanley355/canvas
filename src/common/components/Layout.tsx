import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="">
      <Header />
      <main className="min-h-screen pt-16 lg:pt-12">{children}</main>
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
