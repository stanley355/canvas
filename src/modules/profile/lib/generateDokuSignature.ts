import CryptoJS from "crypto-js";

interface IDokuSignature {
  clientID: string;
  requestID: string;
  requestTimestamp: string;
  requestTarget: string;
  dokuSecretKey: string;
  body: any;
}

export const generateDokuSignature = (payload: IDokuSignature) => {
  const bodyString = JSON.stringify(payload.body);
  const digest = CryptoJS.SHA256(bodyString).toString(CryptoJS.enc.Base64);
  const clientID = `Client-Id:${payload.clientID}\n`;
  const requestID = `Request-Id:4${payload.requestID}\n`;
  const requestTimestamp = `Request-Timestamp:${payload.requestTimestamp}\n`;
  const requestTarget = `Request-Target:${payload.requestTarget}\n`;
  const rawSignature = `${clientID}${requestID}${requestTimestamp}${requestTarget}Digest:${digest}`;

  console.log("secret key: ", payload.dokuSecretKey);
  const signature = CryptoJS.HmacSHA256(rawSignature, payload.dokuSecretKey).toString(CryptoJS.enc.Base64);
  const finalSignature = `HMACSHA256=${signature}`;
  console.log("Final sig:", finalSignature);
  return finalSignature;
};
