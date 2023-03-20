import axios from "axios";

export const getSearchNewsData = async (keyword: string) => {
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
    nyt?.data?.response?.docs,
    theGuardian?.data?.response?.results,
    newsAPI?.data?.articles,
  ]);

  return newsData;
};
