import axios from "axios";

export const handlePremiumTranslation = async (targetLang: string, sourceText: string) => {
  const reqData = {
    content: `Translate "${sourceText}" to ${targetLang}`,
  };
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-premium/`;
  const { data } = await axios.post(URL, reqData);

  if (data?.choices.length > 0) {
    const content = data.choices[0].message.content;
    return content;
    return;
  } else {
    return null;
  }
}