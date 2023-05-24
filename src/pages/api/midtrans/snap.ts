import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const midtransSnapAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = `${process.env.MIDTRANS_URL}snap/v1/transactions`;

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      Authorization: `Basic ${process.env.MIDTRANS_API_KEY}`,
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

export default midtransSnapAPI;
