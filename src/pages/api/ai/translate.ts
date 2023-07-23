import axios from "axios";
import { translate } from "@vitalets/google-translate-api";
import { NextApiRequest, NextApiResponse } from "next";

const translateAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  
  try {
    const trans = await translate(body.promptText, { to: body.targetLanguage });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(trans);
  } catch (err: any) {
    try {
      const trans = await translate(body.prompt, { to: body.targetLanguage });
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(trans);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
};

export default translateAPI;
