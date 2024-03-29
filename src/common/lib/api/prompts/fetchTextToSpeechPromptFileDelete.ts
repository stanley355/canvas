import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchTextToSpeechPromptFileDelete = async (file_name: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/prompts/`;
  const axiosConfig = {
    method: "DELETE",
    url: URL,
    headers: {
      path: `/text-to-speech/file?file_name=${file_name}`,
    },
    data: {},
  };

  try {
    const { data } = await axios(axiosConfig);
    console.log("Delete result: ", data);
    
    return data;
  } catch (error) {
    const errorRes = axiosErrorHandler(URL, error);
    return errorRes;
  }
};
