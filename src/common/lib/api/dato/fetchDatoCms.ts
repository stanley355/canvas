import { request } from "graphql-request";

export const fetchDatoCms = async (
  gqlQuery: string,
  variables?: Record<string, any>
) => {
  const url = String(process.env.DATOCMS_API_URL);
  const header = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  try {
    const datoCmsRes = await request(
      url,
      gqlQuery,
      variables ? variables : {},
      header
    );

    return datoCmsRes;
  } catch (error: any) {
    return {
      status: error?.response?.status ? error.response.status : 500,
      statusText: error?.response?.statusText ? error.response.statusText : "",
      headers: error?.response?.headers ? error.response.headers : {},
      data: error?.response?.data ? error.response.data : null,
    };
  }
};
