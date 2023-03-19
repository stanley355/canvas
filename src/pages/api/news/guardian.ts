import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const guardianNewsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.THE_GUARDIAN_API}${req.headers.path}`);
  url.searchParams.set("api-key", String(process.env.THE_GUARDIAN_API_KEY));

  Object.keys(req.query).forEach((key: string) => {
    url.searchParams.set(key, String(req.query[key]));
  });

  try {
    const response = await axios.get(String(url));
    res.json(response?.data);
  } catch (error) {
    res.json(error);
  }
};

export default guardianNewsAPI;