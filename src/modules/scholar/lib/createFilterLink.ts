export const createFilterLink = (query:any, key: string, value: string) => {
    const targetURL = `${process.env.NEXT_PUBLIC_BASE_URL}scholar`;
    const url = new URL(targetURL);
    url.searchParams.set("q", query.q);
    url.searchParams.set(key, value);

    return String(url);
  };
