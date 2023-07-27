import axios from "axios";

export const getMediaSitemapData = async () => {
  const query = `
    {
      allArticles(orderBy: _publishedAt_DESC, first: "100") {
        id
        title
        slug
        _publishedAt
      }
    }
  `;

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/dato/`;
  try {
    const { data } = await axios.post(URL, { query });
    return data;
  } catch (error) {
    return error;
  }
};
