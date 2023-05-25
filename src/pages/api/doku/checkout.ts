import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = process.env.DOKU_URL;

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      'Client-Id': process.env.DOKU_CLIENT_ID,
      'Request-Id': req.headers.request_id,
      'Request-Timestamp'
      Authorization: `Bearer ${process.env.AUTHOR_TOKEN}`,
    },
    data: req.body,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default dokuCheckoutAPI;
