import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/plans/lib/generateDokuSignature";
// import { generateDokuDigest, generateDokuSignature } from "@/modules/plans/lib/generateDokuSignature";
import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
// import { log } from "console";
import { fetchTopupPayasyouGo } from "@/common/lib/api/topups/fetchTopupPayasyougo";

const dokuCheckoutPaymentAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const topup = await fetchTopupPayasyouGo(req.body);
    const timestamp = new Date().toISOString().slice(0, 19)+"Z";
    const payload = {
      "order": {
        "amount": 2,
        "invoice_number": topup.id,
        "callback_url": "woi",
      },
      "payment": {
        "payment_due_date": 60,
      },
      "customer": {
        "name": "Stanley Winata",
        "email": "winatastanley355@gmail.com",
      },
    };

    const axiosConfig = {
      method: req.method,
      url: "https://api-sandbox.doku.com/checkout/v1/payment",
      headers: {
        "Client-Id": process.env.DOKU_CLIENT_ID,
        "Request-Id": topup.id,
        "Request-Timestamp": timestamp,
        Signature: generateDokuSignature(payload, timestamp),
      },
      data: payload,
    };

    const { data } = await axios(axiosConfig);
    res.json(data);
  } catch (error) {
    console.error(error);
    const errorRes = axiosErrorHandler("/checkout/v1/payment", error);
    res.json(errorRes);
  }
};

export default dokuCheckoutPaymentAPI;
