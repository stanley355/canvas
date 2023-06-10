import { NextApiRequest, NextApiResponse } from "next";
import { translate } from "@vitalets/google-translate-api";

const gtransAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let response;
  try {
    const { text } = await translate(req.body.content, {
      to: req.body.language_code,
    });
    response = text;
  } catch (err: any) {
    response = "Server Error";
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default gtransAPI;
