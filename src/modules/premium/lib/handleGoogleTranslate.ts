import axios from "axios";

export const handleGoogleTranslate = async (
  languageCode: string,
  content: string
) => {
  const reqData = {
    language_code: languageCode,
    content,
  };

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/gtrans/`;
  const { data } = await axios.post(URL, reqData);
  return data;
};
