import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface IMetaHeadSeo {
  title: string;
  description: string;
  image: {
    alt: string;
    url: string;
  };
}

export interface IMetaHead {
  pagesSchema: {
    _updatedAt: string;
    slug: string;
    keywords: string;
    seo: IMetaHeadSeo;
    faq: Record<string, string>[];
  };
}

const MetaHead = (props: IMetaHead) => {
  const { pagesSchema } = props;

  return (
    <Head>
      {/* meta */}
      <title>{pagesSchema.seo.title}</title>
      <meta name="description" content={pagesSchema.seo.description} />
      <meta name="keywords" content={pagesSchema.keywords} />
      <meta
        name="robots"
        content={
          typeof window !== "undefined" &&
          window.location.origin.includes(".world")
            ? "nofollow, noindex"
            : "follow, index"
        }
      />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="canonical"
        href={
          pagesSchema.slug === "home"
            ? process.env.NEXT_PUBLIC_BASE_URL
            : process.env.NEXT_PUBLIC_BASE_URL + pagesSchema.slug
        }
      />
      <link rel="icon" type="image/png" href="/images/languageai.png" />
      {/* opengraph */}
      <meta property="og:title" content={pagesSchema.seo.title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          pagesSchema.slug === "home"
            ? process.env.NEXT_PUBLIC_BASE_URL
            : process.env.NEXT_PUBLIC_BASE_URL + pagesSchema.slug
        }
      />
      <meta property="og:image" content={pagesSchema.seo.image.url} />
      <meta property="og:description" content={pagesSchema.seo.description} />
      <meta property="og:site_name" content="LanguageAi" />
      {/* twitter */}
      <meta name="twitter:title" content={pagesSchema.seo.title} />
      <meta name="twitter:description" content={pagesSchema.seo.description} />
      <meta name="twitter:site" content="website" />
      <meta
        name="twitter:card"
        content={
          pagesSchema.slug === "home"
            ? process.env.NEXT_PUBLIC_BASE_URL
            : process.env.NEXT_PUBLIC_BASE_URL + pagesSchema.slug
        }
      />
      <meta name="twitter:image" content={pagesSchema.seo.image.url} />
      <meta name="twitter:image:alt" content={pagesSchema.seo.image.alt} />
    </Head>
  );
};

export default MetaHead;
