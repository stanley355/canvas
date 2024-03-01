import type { AppProps } from "next/app";
import FirebaseProvider from "@/common/components/FirebaseProvider";
import Layout from "@/common/components/Layout";
import "@/styles/globals.scss";
import '@/styles/shadcn.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}
