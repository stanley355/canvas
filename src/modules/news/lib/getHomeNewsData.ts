import axios from "axios";
import { NEWS_SEO_QUERY } from "./query";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";

export const getHomeNewsData = async () => {

  const datoSEO: any = await fetchDatoCms({
    query: NEWS_SEO_QUERY,
    variables: "",
  });

  const newsBaseEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/news/`;
  const nyt = await axios.get(`${newsBaseEndpoint}nyt/`, {
    headers: { path: "svc/topstories/v2/home.json" },
  });

  const theGuardian = await axios.get(`${newsBaseEndpoint}guardian/`, {
    headers: { path: "search" },
  });

  const newsAPI = await axios.get(`${newsBaseEndpoint}?q=world&pageSize=25`, {
    headers: { path: "everything" },
  });

  const newsData = Promise.allSettled([
    datoSEO?.news?.seo ?? null,
    nyt?.data?.results,
    theGuardian?.data?.response?.results,
    newsAPI?.data?.articles,
  ]);

  return newsData;
};
