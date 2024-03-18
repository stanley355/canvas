import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { generateDokuSignature } from "@/modules/plans/lib/generateDokuSignature";
import { axiosErrorHandler } from "@/common/lib/api/axiosErrorHandler";
import { fetchTopupPayasyouGo } from "@/common/lib/api/topups/fetchTopupPayasyougo";

const dokuCheckoutPaymentAPI = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const timestamp = new Date().toISOString().slice(0, 19) + "Z";

    const axiosConfig = {
      method: req.method,
      url: `${process.env.DOKU_URL}checkout/v1/payment`,
      headers: {
        "Client-Id": process.env.DOKU_CLIENT_ID,
        "Request-Id": req.body.order.invoice_number,
        "Request-Timestamp": timestamp,
        Signature: generateDokuSignature(req.body, timestamp),
      },
      data: req.body,
    };

    const { data } = await axios(axiosConfig);
    res.json(data);
  } catch (error: any) {
    const errorRes = axiosErrorHandler("/checkout/v1/payment", error);
    res.status(error.response.status).send(errorRes);
  }
};

export default dokuCheckoutPaymentAPI;
