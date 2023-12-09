import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorPromptsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = `${process.env.AUTHOR_URL}v1/prompts`;

  if (req.headers && req.headers.path) {
    URL += req.headers.path;
  }
  const axiosConfig: AxiosRequestConfig = {
    method: req.method,
    url: URL,
    data: req.body,
    headers: {
      Authorization: process.env.AUTHOR_TOKEN
    }
  };

  try {
    const { data } = await axios(axiosConfig);
    res.send(data);
  } catch (err: any) {
    const errorRes = axiosErrorHandler(URL, err);
    return errorRes;
  }
};

export default authorPromptsAPI;
