import axios from "axios";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { NEWS_SEO_QUERY } from "./query";

export const getSearchNewsData = async (keyword: string) => {
  const datoSEO: any = await fetchDatoCms({
    query: NEWS_SEO_QUERY,
    variables: "",
  });

  const newsBaseEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/news/`;
  const nyt = await axios.get(`${newsBaseEndpoint}nyt/?q=${keyword}`, {
    headers: { path: "svc/search/v2/articlesearch.json" },
  });

  const theGuardian = await axios.get(
    `${newsBaseEndpoint}guardian/?q=${keyword}`,
    {
      headers: { path: "search" },
    }
  );

  const newsAPI = await axios.get(
    `${newsBaseEndpoint}?q=${keyword}&pageSize=25`,
    {
      headers: { path: "everything" },
    }
  );

  const newsData = Promise.allSettled([
    datoSEO?.news?.seo ?? null,
    nyt?.data?.response?.docs,
    theGuardian?.data?.response?.results,
    newsAPI?.data?.articles,
  ]);

  return newsData;
};
