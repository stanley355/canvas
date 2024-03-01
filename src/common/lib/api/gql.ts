import {gql} from 'graphql-request'

export const getPagesSchema = gql`
query getPagesSchema($slug: String!) {
  pagesSchema(filter: {slug: {eq: $slug}}) {
    _updatedAt
    slug
    keywords
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