import { createClient } from "redis";

export const storeToRedis = async (key: string, value: any) => {
  const client = createClient({
    url: process.env.REDIS_URL,
  });
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  const redisData: any = await client.get(key);

  if (redisData) {
    await client.disconnect();
    return JSON.parse(redisData);
  } else {
    await client.setEx(key, 60 * 60 * 3, JSON.stringify(value)); // 3 hours
    const storedValue = await client.get("key");
    await client.disconnect();
    return storedValue;
  }
};
