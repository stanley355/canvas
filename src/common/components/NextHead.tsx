import Head from 'next/head'
import { removeTrailingSlash } from '../lib/removeTrailingSlash';
import { IDatoPagesSchema } from '../lib/api/dato/interfaces';


export interface NextHeadProps {
  pagesSchema: IDatoPagesSchema
}

const NextHead = (props: NextHeadProps) => {
  const { pagesSchema } = props;

  const url =
    removeTrailingSlash(String(process.env.NEXT_PUBLIC_BASE_URL)) +
    pagesSchema.slug;

  return (
    <Head>
      {/* meta */}
      <title>{pagesSchema.seo.title}</title>
      <meta name="description" content={pagesSchema.seo.description} />
      <meta name="keywords" content={pagesSchema.keywords} />
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" type="image/png" href="/images/languageai/languageai_icon.png" />
      {/* opengraph */}
      <meta property="og:title" content={pagesSchema.seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={pagesSchema.seo.image.url} />
      <meta property="og:description" content={pagesSchema.seo.description} />
      <meta property="og:site_name" content="LanguageAi" />
      {/* twitter */}
      <meta name="twitter:title" content={pagesSchema.seo.title} />
      <meta name="twitter:description" content={pagesSchema.seo.description} />
      <meta name="twitter:site" content="website" />
      <meta name="twitter:card" content={url} />
      <meta name="twitter:image" content={pagesSchema.seo.image.url} />
      <meta name="twitter:image:alt" content={pagesSchema.seo.image.alt} />
    </Head>
  )
}

export default NextHead