import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const openaiCompletionAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = `${process.env.OPENAI_URL}v1/completions`;

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: {
      model: "text-davinci-003",
      prompt: JSON.stringify(req.body.prompt),
    },
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    if (err.response) {
      response = err.response.data;
    } else {
      response = err.message;
    }
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default openaiCompletionAPI;