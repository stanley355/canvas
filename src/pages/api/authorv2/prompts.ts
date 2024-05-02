import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorV2PromptsAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let URL = `${process.env.AUTHOR_URL}v2/prompts`;

  if (req.headers && req.headers.path) {
    URL += req.headers.path;
  }
  const axiosConfig = {
    method: req.method,
    url: URL,
    data: req.body,
    headers: {
      Authorization: process.env.AUTHOR_TOKEN,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    res.json(data);
  } catch (err: any) {
    res.status(err.response.status).json(err.response.data);
  }
};

export default authorV2PromptsAPI;
