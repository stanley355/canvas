import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/profile/lib/generateDokuSignature";

const dokuCheckoutAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = String(process.env.DOKU_URL);

  const timestamp = new Date().toISOString();

  const signaturePayload = {
    requestID: String(req.headers.request_id),
    dokuPath: "/doku-virtual-account/v2/payment-code",
    dokuPayload: req.body
  }
  const signature = generateDokuSignature(signaturePayload); 

  console.log(22, signature);
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
