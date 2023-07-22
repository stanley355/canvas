import axios from "axios";

export const findDocumentPrompts = async (docID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?doc_id=${docID}`,
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
