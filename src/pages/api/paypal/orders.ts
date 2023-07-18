import { NextApiRequest, NextApiResponse } from "next";
import { generatePaypalAccessToken } from "@/modules/profile/lib/generatePaypalAccessToken";

const { NEXT_PUBLIC_PAYPAL_URL, PAYPAL_SECRET } = process.env;

const paypalOrdersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = await generatePaypalAccessToken(String(PAYPAL_SECRET));
  const url = `${NEXT_PUBLIC_PAYPAL_URL}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "0.02",
        },
      },
    ],
  };

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    const paypalRes = await response.json();
    res.json(paypalRes);
  } catch (error) {
    throw new Error(String(error));
  }
};

export default paypalOrdersAPI;
