import axios from "axios";

export const getMediaHomeData = async () => {
  const query = `
    {
      allArticles(orderBy: _publishedAt_DESC, first: "40") {
        id
        title
        slug
        _publishedAt
        heroImg {
          alt
          url
        }
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
