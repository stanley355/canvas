import { NextApiRequest, NextApiResponse } from "next";
import addFirestoreData from "@/common/lib/firebase/addFirestoreData";

const dokuNotificationAPI = (req: NextApiRequest, res: NextApiResponse) => {
  addFirestoreData({
    collectionID: "doku_notification",
    data: req.body,
  });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  res.json({});
};

export default dokuNotificationAPI;
