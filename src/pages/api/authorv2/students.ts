import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorV2StudentsAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let URL = `${process.env.AUTHOR_URL}v2/students`;

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
    res
      .status(err?.response?.status ? err.response.status : 500)
      .json(err?.response?.data ? err?.response?.data : {});
  }
};

export default authorV2StudentsAPI;
