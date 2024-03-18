import CryptoJS from "crypto-js";

export function generateDokuSignature(payload: any, timestamp: string) {
  console.log(444, payload.order.invoice_number);
  const digestSHA256 = CryptoJS.SHA256(JSON.stringify(payload));
  const digestBase64 = CryptoJS.enc.Base64.stringify(digestSHA256);

  const signatureComponents =
    "Client-Id:" +
    String(process.env.DOKU_CLIENT_ID) +
    "\n" +
    "Request-Id:" +
    payload.order.invoice_number +
    "\n" +
    "Request-Timestamp:" +
    timestamp +
    "\n" +
    "Request-Target:/checkout/v1/payment" +
    "\n" +
    "Digest:" +
    digestBase64;

  const signatureHmacSha256 = CryptoJS.HmacSHA256(
    signatureComponents,
    String(process.env.DOKU_SECRET_KEY)
  );
  const signatureBase64 = CryptoJS.enc.Base64.stringify(signatureHmacSha256);

  return "HMACSHA256=" + signatureBase64;
}
