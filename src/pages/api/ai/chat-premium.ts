import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const premiumCompletionAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const URL = `${process.env.OPENAI_URL}v1/chat/completions`;

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY_PREMIUM}`,
    },
    data: {
      model: "gpt-3.5-turbo-16k-0613",
      messages: [{ role: "system", content: req.body.content }],
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

export default premiumCompletionAPI;
