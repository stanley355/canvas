import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateUTC7Timestamp } from "@/common/lib/generateUTC7Timestamp";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  let URL = process.env.DOKU_URL;

  const clientID = String(process.env.DOKU_CLIENT_ID);
  // const timestamp = generateUTC7Timestamp();
  const timestamp = new Date().toISOString();
  const signaturePayload = {
    clientID,
    requestID: String(req.headers.request_id),
    requestTimestamp: timestamp,
    requestTarget: "/checkout/v1/payment",
    dokuSecretKey: String(process.env.DOKU_SECRET_KEY),
    body: req.body
  }
  const signature = generateDokuSignature(signaturePayload); 

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      'Client-Id': process.env.DOKU_CLIENT_ID,
      'Request-Id': req.headers.request_id,
      'Request-Timestamp': timestamp,
      'Signature': signature,
    },
    data: req.body,
  };

  let response;
  try {
    const { data } = await axios(axiosConfig);
    response = data;
  } catch (err: any) {
    response = err;
  }

  res.setHeader("Content-Type", "application/json");
  res.json(response);
};

export default dokuCheckoutAPI;
