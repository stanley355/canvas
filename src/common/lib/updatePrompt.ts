import axios from "axios";

export interface IUpdatePrompt {
  prompt_id: number;
  instruction: string;
  prompt_token: number;
  completion_token: number;
  prompt_text: string;
  completion_text: string;
}

export const updatePrompt = async (payload: IUpdatePrompt) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "PUT",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};
