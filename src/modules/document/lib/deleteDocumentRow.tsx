import axios from "axios";

export const deleteDocumentRow = async (promptID: number) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "DELETE",
    url: URL,
    headers: {
      path: `?prompt_id=${promptID}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};
