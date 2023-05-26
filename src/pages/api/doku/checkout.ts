import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = String(process.env.DOKU_URL);

  const clientID = String(process.env.DOKU_CLIENT_ID);
  const timestamp = new Date().toISOString();
  const secretKey = String(process.env.DOKU_SECRET_KEY);

  const signaturePayload = {
    clientID,
    requestID: String(req.headers.request_id),
    requestTimestamp: String(timestamp),
    requestTarget: "/checkout/v1/payment",
    dokuSecretKey: secretKey,
    body: req.body
  }
  const signature = generateDokuSignature(signaturePayload); 

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      'Client-Id': process.env.DOKU_CLIENT_ID,
      'Request-Id': req.headers.request_id,
      'Request-Timestamp': String(timestamp),
      'Signature': signature,
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
