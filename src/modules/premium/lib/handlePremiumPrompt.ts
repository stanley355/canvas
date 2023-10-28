import axios from "axios";

export const handlePremiumPrompt = async (prompt: string) => {
  const reqData = { content: prompt };

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
  const { data } = await axios.post(URL, reqData);

  if (data?.choices?.length > 0) {
    const content = data.choices[0].message.content;
    return {
      content,
      prompt_tokens: data.usage.prompt_tokens,
      completion_tokens: data.usage.completion_tokens,
    };
  }

  return {
    content: "",
    prompt_tokens: 0,
    completion_tokens: 0,
  };
};
