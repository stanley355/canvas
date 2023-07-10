import axios from "axios";
import { createClient } from "redis";
import { NextApiRequest, NextApiResponse } from "next";

const redisHistory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, query } = req;
  const url = process.env.REDIS_URL;
  const client = createClient({ url });
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();

  const oldHistory = await client.get(query.userID ? query.userID : body.userID);
  if (req.method === "POST") {
    const newHistory = oldHistory
      ? [...JSON.parse(oldHistory), body.history]
      : [body.history];

    client.set(body.userID, JSON.stringify(newHistory), { EX: 60 * 60 * 6 }); //6 hours
    await client.disconnect();
  }

  res.json(oldHistory);
};

export default redisHistory;
