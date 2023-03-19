import axios from "axios";

export const getHomeNewsData = async () => {
  const newsBaseEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/news/`;
  const nyt = await axios.get(`${newsBaseEndpoint}nyt/`, {
    headers: { path: "svc/topstories/v2/home.json" },
  });

  const theGuardian = await axios.get(
    `${newsBaseEndpoint}guardian/?show-elements=image`,
    {
      headers: { path: "search" },
    }
  );

  const newsAPI = await axios.get(`${newsBaseEndpoint}?q=world&pageSize=25`, {
    headers: { path: "everything" },
  });

  const newsData = Promise.allSettled([
    nyt?.data?.results,
    theGuardian?.data?.response?.results,
    newsAPI?.data?.articles,
  ]);

  return newsData;
};
