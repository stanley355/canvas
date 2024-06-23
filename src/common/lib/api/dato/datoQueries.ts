import { gql } from "graphql-request";

export const getDatoPagesSchema = gql`
  query getPagesSchema($slug: String!) {
    pagesSchema(filter: { slug: { eq: $slug } }) {
      _updatedAt
      slug
      keywords
      faq
      seo {
        title
        description
        image {
          alt
          url
        }
      }
    }
  }
`;
