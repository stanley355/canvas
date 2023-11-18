import Layout from "@/common/components/Layout";
import initFirebaseAnalytic from "@/common/lib/firebase/initFirebaseAnalytic";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    initFirebaseAnalytic();
  }
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
