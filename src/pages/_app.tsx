import type { AppProps } from "next/app";
import FirebaseProvider from "@/modules/firebase/components/FirebaseProvider";
import AppProvider from "@/modules/app/components/AppProvider";
import Layout from "@/common/components/Layout";
import "@/styles/globals.scss";
import "@/styles/shadcn.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </FirebaseProvider>
  );
}
