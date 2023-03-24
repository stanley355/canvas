import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const semanticScholarAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.SEMANTIC_SCHOLAR_URL}v1/${req.headers.path}`);

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

export default semanticScholarAPI;
