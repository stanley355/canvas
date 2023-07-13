import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorReferralAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = `${process.env.AUTHOR_URL}v1/referral/`;

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

export default authorReferralAPI;
