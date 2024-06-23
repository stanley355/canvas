export const apiErrorHandler = (error: any) => {
  const apiError = {
    status: error?.response?.status ? error.response.status : 500,
    statusText: error?.response?.statusText ? error.response.statusText : "",
    headers: error?.response?.headers ? error.response.headers : {},
    data: error?.response?.data ? error.response.data : {}
  }

  return apiError;
}