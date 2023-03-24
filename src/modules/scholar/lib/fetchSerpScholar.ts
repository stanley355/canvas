import axios from "axios";

interface ISerpScholarFilter {
  key: string;
  value: string;
}

export const fetchSerpScholar = async (
  searchQuery: string,
  filter?: ISerpScholarFilter
) => {
  const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}api/serp/scholar`;
  const url = new URL(targetURL);
  url.searchParams.set("q", searchQuery);
  url.searchParams.set("num", "20");

  if (filter && filter.key) {
    url.searchParams.set(filter.key, filter.value);
  }

  const { data } = await axios.get(String(url));
  return data;
};
