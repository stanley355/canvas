import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = `${process.env.AUTHOR_URL}v1/users`;

  if (req.headers && req.headers.path) {
    URL += req.headers.path;
  }

  const axiosConfig = {
    method: req.method,
    url: URL,
    data: req.body,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err.response?.data ?? err.response;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default authorAPI;
