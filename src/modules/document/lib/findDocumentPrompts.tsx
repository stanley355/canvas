import axios from "axios";

export const findDocumentPrompts = async (docID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author//`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?id=${docID}`,
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
