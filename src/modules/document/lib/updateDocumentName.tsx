import axios from "axios";

interface IUpdateDocument {
  id: string;
  name: string;
}

export const updateDocumentName = async (payload: IUpdateDocument) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "PUT",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
