import axios from "axios";

export const fetchSerpScholar = async (searchQuery: string) => {
  const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}api/scholar/semantic`;
  const url = new URL(targetURL);
  url.searchParams.set("query", searchQuery);
  url.searchParams.set("offset", "10");
  url.searchParams.set("limit", "20");
  const fields = "title,authors,url,abstract,year,citationCount";
  url.searchParams.set("fields", fields);

  const { data } = await axios.get(String(url));
  return data;
};
