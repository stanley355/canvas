import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const serpScholarAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.SERPAPI_URL}search`);
  url.searchParams.set("api_key", String(process.env.SERPAPI_KEY));
  url.searchParams.set("engine", "google_scholar");

  Object.keys(req.query).forEach((key: string) => {
    url.searchParams.set(key, String(req.query[key]));
  });

  try {
    const { data } = await axios.get(String(url));
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

export default serpScholarAPI;
