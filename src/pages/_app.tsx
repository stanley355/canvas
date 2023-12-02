import FirebaseProvider from "@/common/components/FirebaseProvider";
import Layout from "@/common/components/Layout";
import initFirebaseAnalytic from "@/common/lib/firebase/initFirebaseAnalytic";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}
