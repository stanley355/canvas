import axios from "axios";

export const getArticleData = async (slug: string) => {
  const query = `
    {
      article(filter: {slug: {eq: "${slug}"}}) {
        _publishedAt
        id
        keywords
        metaTags {
          title
          description
        }
        title
        slug
        heroImg {
          alt
          url
        }
        content(markdown: true)
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
