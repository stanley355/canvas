import { createClient } from "redis";

export const storeToRedis = async (
  key: string,
  expTime: number,
  value: any
) => {
  const client = createClient({
    url: process.env.REDIS_URL,
  });
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.setEx(key, expTime, JSON.stringify(value)); // 3 hours
  await client.disconnect();
  return "";
};
