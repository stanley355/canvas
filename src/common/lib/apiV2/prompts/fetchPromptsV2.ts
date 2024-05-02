import axios from "axios";

export enum PromptsV2Type {
  Translate = "Translate",
  GrammarCheck = "GrammarCheck"
}

export interface IFetchPromptsV2Payload {
  user_id: string;
  prompt_type: PromptsV2Type
  system_content: string;
  user_content: string;
}

export const fetchPromptsV2 = async (payload: IFetchPromptsV2Payload) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/prompts/`;
  const axiosConfig = {
    method: "POST",
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
    console.error(error);
    // const errorRes = axiosErrorHandler(URL, error);
    return {};
  }
};
