import { NextApiRequest, NextApiResponse } from "next";
import { translate } from "@vitalets/google-translate-api";
import { HttpProxyAgent } from "http-proxy-agent";

const gtransAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let response;
  try {
    const agent = new HttpProxyAgent(String(process.env.NEXT_PUBLIC_BASE_URL));
    const { text } = await translate(req.body.content, {
      to: req.body.language_code,
      fetchOptions: { agent },
    });
    response = text;
  } catch (err: any) {
    response = "Server Error";
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default gtransAPI;
