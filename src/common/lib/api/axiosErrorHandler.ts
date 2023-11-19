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

    console.error("Response error for: ", url);
    console.error(url, errorResponse);
    return errorResponse;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    console.error("Request made but no response for: ", url);
    console.error(url, error.request);
    return {
      status: 400,
      headers: {},
      data: {},
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Unknown error for: ", url);
    console.error(url, error.request);
    return {
      status: 500,
      headers: {},
      data: {},
    };
  }
};
