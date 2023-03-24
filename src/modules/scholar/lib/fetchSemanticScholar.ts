import axios from "axios";
interface ISemanticScholarFilter {
  key: string;
  value: string;
}

export const fetchSemanticScholar = async (
  searchQuery: string,
  filter?: ISemanticScholarFilter
) => {
  const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}api/scholar/semantic`;
  const url = new URL(targetURL);
  url.searchParams.set("query", searchQuery);
  url.searchParams.set("offset", "10");
  url.searchParams.set("limit", "20");
  const fields = "title,authors,url,abstract,year,citationCount";
  url.searchParams.set("fields", fields);

  if (filter && filter.key) {
    url.searchParams.set(filter.key, filter.value);
  }

  const { data } = await axios.get(String(url), {
    headers: {
      path: "paper/search",
    },
  });

  return data;
};
