import axios from "axios";
import { IPrompt } from "../../api/prompts/interfaces";
import { IAuthorErrorResponse } from "../authorErrorInterface";

export const fetchDeleteTtsFileV2 = async (
  prompt_id: number
): Promise<IPrompt & IAuthorErrorResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/prompts/`;
  const axiosConfig = {
    method: "DELETE",
    url: URL,
    headers: {
      path: `/tts/file?prompt_id=${prompt_id}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    console.log(11, data);
    
    return data;
  } catch (error: any) {
    console.log(33, error);
    
    return error.response.data;
  }
};
