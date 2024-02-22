export const axiosErrorHandler = (url: string, error: any) => {
  if (error.response) {
    const { data, status, headers } = error.response;
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const errorResponse = {
      status,
      headers,
      data,
    };

    console.error(`Response Err: ${url}`, errorResponse);
    return errorResponse;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    console.error(`Request Err: ${url}`, error.toJSON());
    return {
      status: 400,
      headers: {},
      data: {},
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`Unknown Err: ${url}`, error.toJSON());
    return {
      status: 500,
      headers: {},
      data: {},
    };
  }
};
