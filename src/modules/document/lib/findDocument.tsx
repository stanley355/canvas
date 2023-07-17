import axios from "axios";

export const findDocument = async (userID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?user_id=${userID}`,
    },
  };

  const { data } = await axios(axiosConfig);
  return data;
};
