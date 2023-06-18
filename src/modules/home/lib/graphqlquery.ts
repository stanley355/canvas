export const HOME_GRAPHQL_QUERY = `
{
  blog(filter: {title: {eq: "home"}}) {
    keywords
    metaTags {
      title
      description
    }
  }
}`;
