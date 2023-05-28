import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = String(process.env.DOKU_URL);

  const requestID = req.headers.request_id;
  const timestamp = new Date().toISOString();

  const signaturePayload = {
    requestID: String(requestID),
    dokuPath: "/checkout/v1/payment",
    dokuPayload: req.body
  }
  const signature = generateDokuSignature(signaturePayload); 

  const axiosConfig = {
    method: req.method,
    url: URL,
    headers: {
      'Client-Id': process.env.DOKU_CLIENT_ID,
      'Request-Id': requestID,
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
