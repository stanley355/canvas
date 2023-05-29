import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = `${process.env.DOKU_URL}${req.headers.doku_path}`;
  const clientID = process.env.DOKU_CLIENT_ID;
  const requestID = req.headers.request_id;
  const timestamp = new Date().toISOString();

  const signaturePayload = {
    timestamp,
    requestID: String(requestID),
    dokuPath: String(req.headers.doku_path),
    dokuPayload: req.body,
  };
  const signature = generateDokuSignature(signaturePayload);

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      "Client-Id": clientID,
      "Request-Id": requestID,
      "Request-Timestamp": timestamp,
      Signature: signature,
    },
    data: req.body,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err?.response?.data ?? err;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default dokuCheckoutAPI;
