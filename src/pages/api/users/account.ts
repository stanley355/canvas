import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorV2UsersAccount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const url = `${process.env.AUTHOR_URL}v2/users/account?id=${req.query.id}`;

  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: process.env.AUTHOR_TOKEN },
    });
    res.json(data);
  } catch (err: any) {
    const status = err?.response?.status ? err.response.status : 500;
    const data = err?.response?.data ? err.response.data : {};
    res.status(status).json(data);
  }
};

export default authorV2UsersAccount;
