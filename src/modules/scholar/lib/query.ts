export const SCHOLAR_DATO_SEO_QUERY = `
    query MyQuery {
      scholar {
        title
        slug
        _createdAt
        _publishedAt
        _updatedAt
        seo {
          title
          description
          twitterCard
        }
      }
    }
`;
