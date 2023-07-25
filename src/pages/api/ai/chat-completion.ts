import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const openaiCompletionAPI = async (
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
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.content }],
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    res.setHeader("Content-Type", "application/json");
    res.json(data);
  } catch (err: any) {
    axiosConfig.data.model = "gpt-3.5-turbo-16k";

    try {
      const { data } = await axios(axiosConfig);
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    } catch (error) {
      res.status(500).send(err);
    }
  }
};
export default openaiCompletionAPI;
