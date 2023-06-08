import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorCheckbotAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = `${process.env.AUTHOR_URL}v1/prompts/`;

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.AUTHOR_TOKEN}`,
    },
    data: req.body,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err?.response?.data ?? err.response;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default authorCheckbotAPI;
