import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const openaiChatCompletionAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const URL = `${process.env.OPENAI_URL}v1/chat/completions`;

  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo-16k",
      messages: [{ role: "user", content: req.body.content }],
    },
  };

  // first try catch
  try {
    const { data } = await axios(axiosConfig);
    res.send(data);
  } catch (err: any) {
    // second try catch
    axiosConfig.data.model = "gpt-3.5-turbo-1106";
    try {
      const { data } = await axios(axiosConfig);
      res.send(data);
    } catch (error) {
      // third try catch
      axiosConfig.data.model = "gpt-3.5-turbo";
      try {
        const { data } = await axios(axiosConfig);
        res.send(data);
      } catch (error) {
        const errorRes = await axiosErrorHandler(URL, err);
        res.send(errorRes);
      }
    }
  }
};
export default openaiChatCompletionAPI;
