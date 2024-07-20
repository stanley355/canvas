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
          width
          height
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
        width
        height
        alt
        url
      }
    }
  }
`;

export const getDatoBlogSchema = gql`
  query getBlog($slug: String!) {
    blog(filter: { slug: { eq: $slug } }) {
      ...blogSeoFragment
      content(markdown: true)
    }
  }
  ${BLOG_SEO_FRAGMENT}
`;

export const getDatoBlogHomeSchema = gql`
  query getAllBlog {
    allBlogs(orderBy: [_createdAt_DESC]) {
      slug
      seo {
        title
        description
        image {
          alt
          url
          width
          height
        }
      }
    }
  }
`;
