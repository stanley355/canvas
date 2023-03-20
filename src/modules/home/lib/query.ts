export const HOME_SEO_QUERY = `
    query HomeSEOQuery {
      home {
        title
        slug
        seo {
          title
          twitterCard
          description
        }
      }
    }
`;
