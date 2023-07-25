import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const datoCmsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = process.env.DATOCMS_URL;
  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
    },
    data: JSON.stringify(req.body),
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    res.setHeader("Content-Type", "application/json");
    res.json(response);
  } catch (err: any) {
    res.status(500).send({ error: err });
  }
};

export default datoCmsApi;
