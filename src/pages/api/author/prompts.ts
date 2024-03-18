import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorPromptsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = `${process.env.AUTHOR_URL}v1/prompts`;

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
    const errorRes = axiosErrorHandler(URL, err);
    res.json(errorRes);
  }
};

export default authorPromptsAPI;
