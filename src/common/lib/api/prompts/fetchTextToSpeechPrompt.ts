import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchTextToSpeechPrompt = async (userID: string, userPrompt: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/text-to-speech/",
    },
    data: {
      user_id: userID,
      user_prompt: userPrompt,
      voice: "Alloy"
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
