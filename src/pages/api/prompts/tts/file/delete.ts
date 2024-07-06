import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorV2TtsDeleteFileApi = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const url = `${process.env.AUTHOR_URL}v2/tts/file?prompt_id=${req.query.prompt_id}`;

  try {
    const { data } = await axios.delete(url, {
      headers: { Authorization: process.env.AUTHOR_TOKEN },
    });
    res.json(data);
  } catch (err: any) {
    const status = err?.response?.status ? err.response.status : 500;
    const data = err?.response?.data ? err.response.data : null;
    res.status(status).json(data);
  }
};

export default authorV2TtsDeleteFileApi;
