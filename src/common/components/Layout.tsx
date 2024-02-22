import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import DocumentVideoModal from "@/modules/document/components/DocumentVideoModal";
import { sendFirebaseEvent } from "../lib/firebase/sendFirebaseEvent";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const videoCookie = Cookies.get("show_video");
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    if (!videoCookie) {
      sendFirebaseEvent("document_video_popup");
      setShowVideoModal(true);
      Cookies.set("show_video", "false", { expires: 2 });
      return;
    }
  }, [videoCookie]);

  return (
    <div className={inter.className}>
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
      {showVideoModal && (
        <DocumentVideoModal onCloseClick={() => setShowVideoModal(false)} />
      )}
    </div>
  );
};

export default Layout;
