import type { AppProps } from "next/app";
import FirebaseProvider from "@/common/components/FirebaseProvider";
import Layout from "@/common/components/Layout";
import "@/styles/globals.scss";
import "@/styles/shadcn.scss";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>

      <Script type="text/javascript" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "m0voqp1w10");`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}
