import axios from "axios";

export const deleteDocument = async (docID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "DELETE",
    url: URL,
    headers: {
      path: `?id=${docID}`,
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
