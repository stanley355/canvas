import axios from "axios";

export const fetchCheckbotAndDispatch = async (
  prompt: any,
  dispatch: (content: string) => void
) => {
  // TODO: Change this to fetch from next api on live hosting
  const URL = `${process.env.NEXT_PUBLIC_OPENAI_URL}v1/chat/completions`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt.message }],
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    if (data && data.choices.length > 0) {
      const content = data.choices[0].message.content;
      dispatch(content);
    }
  } catch (err: any) {
    alert("Something went wrong, please try again");
    return "";
  }

  // const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
  // const { data } = await axios.post(URL, prompt);
  // if (data && data.choices.length > 0) {
  //   const content = data.choices[0].message.content;
  //   dispatch(content);
  // } else {
  //   alert("Something went wrong, please try again!");
  //   return "";
  // }
};
