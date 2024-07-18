import { gql } from "graphql-request";

export const getDatoPagesSchema = gql`
  query getPagesSchema($slug: String!) {
    pagesSchema(filter: { slug: { eq: $slug } }) {
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

const BLOG_SEO_FRAGMENT = gql`
fragment blogSeoFragment on BlogRecord {
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
}`;

export const getDatoBlogSchema = gql`
query getBlog($slug: String!) {
  blog(filter: {slug: {eq: $slug}}) {
    ...blogSeoFragment
    content(markdown: true)
    relatedArticles {
      id
      title
      slug
      _updatedAt
    }
    heroImage {
      title
      url
      width
      height
    }
  }
}
  ${BLOG_SEO_FRAGMENT}`;
