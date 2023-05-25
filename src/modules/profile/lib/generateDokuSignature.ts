import sha256 from "crypto-js/sha256";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

interface IDokuSignature {
  clientID: string;
  requestID: string;
  requestTimestamp: string;
  requestTarget: string;
  dokuSecretKey: string;
  body: any;
}

export const generateDokuSignature = (payload: IDokuSignature) => {
  const digest =Base64.stringify(sha256(payload.body));
  const clientID = `Client-Id:${payload.clientID}\n`;
  const requestID = `Request-Id:4${payload.requestID}\n`;
  const requestTimestamp = `Request-Timestamp:${payload.requestTimestamp}\n`;
  const requestTarget = `Request-Target:${payload.requestTarget}\n`;
  const rawSignature = `${clientID}${requestID}${requestTimestamp}${requestTarget}Digest:${digest}`;

  console.log("secret key: ", payload.dokuSecretKey);
  const signature = Base64.stringify(hmacSHA256(rawSignature, payload.dokuSecretKey));
  const finalSignature = `HMACSHA256=${signature}`;
  console.log("Final sig:", finalSignature);
  return finalSignature;
};
