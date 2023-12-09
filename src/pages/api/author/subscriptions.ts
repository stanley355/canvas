import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorSubscriptionsAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let URL = `${process.env.AUTHOR_URL}v1/subscriptions`;

  if (req.headers && req.headers.path) {
    URL += req.headers.path;
  }
  const axiosReqConfig = {
    method: req.method,
    url: URL,
    data: req.body,
    headers: {
      Authorization: process.env.AUTHOR_TOKEN
    }
  };

  try {
    const { data } = await axios(axiosReqConfig);
    res.send(data);
  } catch (err: any) {
    const errorRes = axiosErrorHandler(URL, err);
    res.send(errorRes);
  }
};

export default authorSubscriptionsAPI;
