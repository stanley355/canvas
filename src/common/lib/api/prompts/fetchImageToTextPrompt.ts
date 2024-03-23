import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchNewImageToTextPrompt = async (userID: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/image-to-text/",
    },
    data: {
      user_id: userID,
      prompt_type: "ImageToText"
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
