// WARNING! Must be called on server side
import sha256 from "crypto-js/sha256";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

interface IDokuSignature {
  requestID: string;
  dokuPath: string;
  dokuPayload: string | any;
}

const generateDokuDigest = (payload: IDokuSignature) => {
  const body = JSON.stringify(payload.dokuPayload);
  const hashDigest = sha256(body);
  const hmacDigest = Base64.stringify(hashDigest);
  const digest = `Digest:${hmacDigest}`;

  return digest;
};

const generateSignatureString = (payload: IDokuSignature) => {
  const clientID = `Client-Id:${process.env.DOKU_CLIENT_ID}`;
  const reqID = `Request-Id:${payload.requestID}`;
  const reqTimestamp = `Request-Timestamp:${new Date().toISOString()}`;
  const reqTarget = `Request-Target:${payload.dokuPath}`;
  const baseString =
    clientID + "\n" + reqID + "\n" + reqTimestamp + "\n" + reqTarget;

  if (payload.dokuPayload) {
    const digest = generateDokuDigest(payload);
    return baseString + "\n" + digest;
  }

  return baseString;
};

// WARNING! Must be called on server side
export const generateDokuSignature = (payload: IDokuSignature) => {
  const signatureString = generateSignatureString(payload);
  console.log(11, signatureString);
  const privateKey = String(process.env.DOKU_SECRET_KEY);
  const hmac = hmacSHA256(signatureString, privateKey);
  const base64 = Base64.stringify(hmac);

  return `HMACSHA256=${base64}`;
};
