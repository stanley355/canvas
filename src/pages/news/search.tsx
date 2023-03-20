import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import NewsPageLayout from "@/modules/news/components/Layout";
import { getSearchNewsData } from "@/modules/news/lib/getSearchNewsData";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import NYTSearchResults from "@/modules/news/components/NYTSearchResults";
import NewsAPISearchResults from "@/modules/news/components/NewsAPISearchResults";
import TheGuardianSearchResults from "@/modules/news/components/TheGuardianSearchResults";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { NEWS_SEO_QUERY } from "@/modules/news/lib/query";

const NewsSearchPage = (props: any) => {
  const { query, nyt, theGuardian, newsAPI } = props;

  const filteredNYT = nyt.filter((n: any) => n.multimedia.length > 0);
  const isDesktop = useDesktopScreen();

  return (
    <NewsPageLayout query={query}>
      <div className="border-b text-center py-2">
        Showing {nyt.length + theGuardian.length + newsAPI.length} News
      </div>
      <div className="lg:flex lg:flex-row lg:border-b">
        <NYTSearchResults
          articles={isDesktop ? filteredNYT.slice(0, 5) : filteredNYT}
        />
        <TheGuardianSearchResults articles={theGuardian} />
      </div>
      <NewsAPISearchResults
        articles={newsAPI.filter((news: any) => news.urlToImage)}
      />
    </NewsPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  const datoSEO: any = await fetchDatoCms({
    query: NEWS_SEO_QUERY,
    variables: "",
  });

  const newsData: any = await getSearchNewsData(String(query.q));

  let nyt = newsData[0].value;
  let theGuardian = newsData[1].value;
  let newsAPI = newsData[2].value;

  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      query,
      seo: datoSEO?.news?.seo ?? null,
      nyt,
      theGuardian,
      newsAPI,
    },
  };
};

export default NewsSearchPage;
