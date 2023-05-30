import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = String(process.env.DOKU_URL);
  const dokuURL = `${URL}${req.body.headers.doku_path}`;

  const clientID = process.env.DOKU_CLIENT_ID;
  const requestID = req.body.headers.request_id;
  const timestamp = new Date().toISOString();

  const signaturePayload = {
    timestamp,
    requestID: String(requestID),
    dokuPath: String(req.body.headers.doku_path),
    dokuPayload: req.body.main,
  };
  const signature = generateDokuSignature(signaturePayload);

  const axiosConfig = {
    method: req.method,
    url: dokuURL,
    headers: {
      "Client-Id": clientID,
      "Request-Id": requestID,
      "Request-Timestamp": timestamp,
      Signature: signature,
    },
    data: req.body.main,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err?.response?.data ?? err;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(axiosConfig);
};

export default dokuCheckoutAPI;
