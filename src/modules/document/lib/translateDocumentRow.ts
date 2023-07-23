import axios from "axios";

export const translateDocumentRow = async (
  promptText: string,
  targetLanguage: string
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/translate/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: {
      promptText,
      targetLanguage,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};
