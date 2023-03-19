import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const newYorkTimesAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = new URL(`${process.env.NYT_API_URL}snarch`);
  url.searchParams.set("api-key", String(process.env.NYT_API_KEY));

  try {
    const response = await axios.get(String(url));
    res.json(response?.data);
  } catch (error) {
    res.json(error);
  }
};

export default serpScholarAPI;
