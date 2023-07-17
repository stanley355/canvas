import axios from "axios";

export interface ICreateDocument {
  user_id: string;
  name: string;
  doc_type: string;
}

export const createDocument = async (payload: ICreateDocument) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
