import { createClient } from "redis";

export const getFromRedis = async (key: string) => {
  const client = createClient({
    url: process.env.REDIS_URL,
  });
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  const redisData: any = await client.get(key);

  await client.disconnect();

  if (redisData) {
    return JSON.parse(redisData);
  }

  return null;
};
