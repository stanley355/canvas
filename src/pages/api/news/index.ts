import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const newsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.NEWSAPI_URL}v2/${req.headers.path}`);
  url.searchParams.set("apikey", String(process.env.NEWSAPI_KEY));

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

export default newsAPI;