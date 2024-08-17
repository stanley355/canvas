import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorUsersChangePassword = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(111, req.body);

  const url = `${process.env.AUTHOR_URL}v1/users/change-password/`;

  try {
    const { data } = await axios.put(url, req.body, {
      headers: { Authorization: process.env.AUTHOR_TOKEN },
    });
    res.json(data);
  } catch (err: any) {
    const status = err?.response?.status ? err.response.status : 500;
    const data = err?.response?.data ? err.response.data : null;
    res.status(status).json(data);
  }
};

export default authorUsersChangePassword;
