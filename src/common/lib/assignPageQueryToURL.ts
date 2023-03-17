export const assignPageQueryToURL = (url: string, query: any) => {
  const targetURL = new URL(url);
  Object.keys(query).forEach((key) => {
    targetURL.searchParams.set(key, String(query[key]));
  });

  return targetURL;
};
