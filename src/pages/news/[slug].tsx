import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { NEWS_SECTIONS } from "@/modules/news/lib/constant";
import { getSearchNewsData } from "@/modules/news/lib/getSearchNewsData";
import { getFromRedis } from "@/common/lib/getFromRedis";
import { storeToRedis } from "@/common/lib/storeToRedis";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import TheGuardianSearchResults from "@/modules/news/components/TheGuardianSearchResults";
import NYTSearchResults from "@/modules/news/components/NYTSearchResults";
import NewsAPISearchResults from "@/modules/news/components/NewsAPISearchResults";
import NewsPageLayout from "@/modules/news/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";

const NewsSection = (props:any) => {
  const { slug, seo, nyt, theGuardian, newsAPI } = props;

  const filteredNYT = nyt.filter((n: any) => n.multimedia.length > 0);
  const isDesktop = useDesktopScreen();

  const DesktopOnlyView = () => (
    <div>
      <div className="lg:flex lg:flex-row">
        <TheGuardianSearchResults articles={isDesktop ? theGuardian.slice(5, 10) : theGuardian} />
        <NYTSearchResults
          articles={isDesktop ? filteredNYT.slice(2, 4) : filteredNYT}
        />
      </div>
      <NewsAPISearchResults
        articles={newsAPI.filter((news: any) => news.urlToImage).slice(8, 16)}
      />
    </div>
  )

  return (
    <NewsPageLayout query={{q: slug}}>
      {seo && <MetaSEO seo={seo} />}
      <div className="lg:flex lg:flex-row">
        <NYTSearchResults
          articles={isDesktop ? filteredNYT.slice(0, 2) : filteredNYT}
        />
        <TheGuardianSearchResults articles={isDesktop ? theGuardian.slice(0, 5) : theGuardian} />
      </div>
      <NewsAPISearchResults
        articles={newsAPI.filter((news: any) => news.urlToImage).slice(0, 8)}
      />
      {isDesktop && <DesktopOnlyView />}
    </NewsPageLayout>
  );
};

export default NewsSection;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = NEWS_SECTIONS.map((section) => ({
    params: { slug: section.title.toLowerCase() },
  }));

  return {
    paths,
    fallback: false
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  let seo = null;
  let nyt = [];
  let theGuardian = [];
  let newsAPI = [];

  const REDIS_KEY = `news:${params?.slug}`;
  const prevData = await getFromRedis(REDIS_KEY);

  // TODO: Reduce data fetching
  if (prevData && prevData.length && prevData.length > 0) {
    seo = prevData[0].value,
    nyt = prevData[1].value;
    theGuardian = prevData[2].value;
    newsAPI = prevData[3].value;
  } else {
    const newsData: any = await getSearchNewsData(String(params?.slug));
    await storeToRedis(REDIS_KEY, 60 * 60 * 3, newsData); // 3 hours

    seo = newsData[0].value,
    nyt = newsData[1].value;
    theGuardian = newsData[2].value;
    newsAPI = newsData[3].value;
  }

  return {
    props: {
      slug: params?.slug ?? null,
      seo,
      nyt,
      theGuardian,
      newsAPI,
    },
  };
};
