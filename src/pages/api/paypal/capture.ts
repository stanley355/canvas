import { NextApiRequest, NextApiResponse } from "next";
import { generatePaypalAccessToken } from "@/modules/profile/lib/generatePaypalAccessToken";

const { PAYPAL_URL, PAYPAL_SECRET } = process.env;

const paypalCaptureAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const accessToken = await generatePaypalAccessToken(String(PAYPAL_SECRET));
  const url = `${PAYPAL_URL}/v2/checkout/orders/${body.orderId}/capture`;

  console.log(444, body);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const paypalRes = await response.json();
    res.setHeader("Content-Type", "application/json");
    res.json(paypalRes);
  } catch (error) {
    throw new Error(String(error));
  }
};

export default paypalCaptureAPI;
