import axios from "axios";

export const getMediaPageData = async (slug: string) => {
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
      allArticles(orderBy: _publishedAt_DESC, first: "5") {
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
