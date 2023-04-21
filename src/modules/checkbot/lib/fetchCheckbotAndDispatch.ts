import axios from "axios";

export const fetchCheckbotAndDispatch = async (
  prompt: any,
  dispatch: (content: string) => void
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
  const { data } = await axios.post(URL, prompt);
  if (data && data.choices.length > 0) {
    const content = data.choices[0].message.content;
    dispatch(content);
  } else {
    alert("Something went wrong, please try again!");
    return "";
  }
};
