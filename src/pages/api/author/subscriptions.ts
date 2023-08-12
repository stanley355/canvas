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
  const axiosConfig = {
    method: req.method,
    url: URL,
    data: req.body,
  };

  try {
    const { data } = await axios(axiosConfig);
    res.setHeader("Content-Type", "application/json");
    res.json(data);
  } catch (err: any) {
    res.status(err.response.status).send(err.response.data);
  }
};

export default authorSubscriptionsAPI;
