import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const authorAudioSpeechDeleteApi = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const url = `${process.env.AUTHOR_URL}v1/prompts/audio/speech?prompt_id=${req.query.prompt_id}`;

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

export default authorAudioSpeechDeleteApi;
