import { GraphQLClient } from "graphql-request";

export const fetchDatoCms = ({
  query,
  variables,
}: {
  query: string;
  variables: any;
}) => {
  const headers = {
    authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
    "X-Exclude-Invalid": "true",
  };

  const url = String(process.env.DATOCMS_GRAPHQL_URL);
  const client = new GraphQLClient(url, {
    headers,
  });
  return client.request(query, variables);
};
