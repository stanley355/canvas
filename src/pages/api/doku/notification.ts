import { NextApiRequest, NextApiResponse } from "next";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const dokuNotificationAPI = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  sendFirebaseEvent("doku_notification", req.body);

  res.json({});
};

export default dokuNotificationAPI;
