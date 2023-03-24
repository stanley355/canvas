import axios from "axios";

export const fetchSerpScholar = async (searchQuery: string) => {
  const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/serp/scholar`;
  const url = new URL(targetURL);
  url.searchParams.set("q", searchQuery);

  const { data } = await axios.get(String(url));
  return data;
};
