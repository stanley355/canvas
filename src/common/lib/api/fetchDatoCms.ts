import { request } from "graphql-request";
import { axiosErrorHandler } from "./axiosErrorHandler";

export const fetchDatoCms = async (
  gqlQuery: string,
  variables?: Record<string, any>
) => {
  const url = String(process.env.DATOCMS_API_URL);
  const header = {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  console.log(url);
  console.log(header);
  
  
  try {
    const datoCmsRes = await request(
      url,
      gqlQuery,
      variables ? variables : {},
      header
    );

    console.log(datoCmsRes);
    
    return datoCmsRes;
  } catch (error) {
    const errorRes = axiosErrorHandler(url, error);
    return errorRes;
  }
};
