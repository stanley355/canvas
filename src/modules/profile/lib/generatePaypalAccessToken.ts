const { NEXT_PUBLIC_PAYPAL_CLIENT_ID, NEXT_PUBLIC_PAYPAL_URL } = process.env;

export const generatePaypalAccessToken = async (paypalSecret: string) => {
  try {
    const auth = Buffer.from(
      NEXT_PUBLIC_PAYPAL_CLIENT_ID + ":" + paypalSecret
    ).toString("base64");
    const response = await fetch(`${NEXT_PUBLIC_PAYPAL_URL}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    return null;
  }
};
