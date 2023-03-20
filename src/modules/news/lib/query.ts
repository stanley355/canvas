export const NEWS_SEO_QUERY = `
query NewsSEOQuery {
    news {
      slug
      title
      seo {
        title
        description
        twitterCard
      }
    }
  }
`;
