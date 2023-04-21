import React from "react";
import Head from "next/head";

interface IMetaSEO {
  seo: any;
}

const MetaSEO = ({ seo }: IMetaSEO) => {
  return (
    <Head>
      <title>hi</title>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="content-language" content="ID" />
      <meta name="theme-color" content="#1D66DD" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={seo?.title} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:url" content={seo?.url} />
      <meta property="og:site_name" content="LanguageAI" />
      <meta property="og:image" content={seo?.image ?? ""} />
      <meta name="twitter:card" content={seo?.twitterCard} />
      <meta name="twitter:title" content={seo?.title} />
      <meta name="twitter:description" content={seo?.description} />
      <meta name="twitter:image" content={seo?.image?.url} />
      <link rel="icon" type="image/png" href="/images/langai_icon.png" />
      {/* <meta name="twitter:creator" content="@localhost" />
    <meta name="twitter:site" content="@localhost" />
    <meta name="twitter:label1" content="@localhost" />
    <meta name="twitter:data1" content="localhost" /> */}
    </Head>
  );
};

export default MetaSEO;
