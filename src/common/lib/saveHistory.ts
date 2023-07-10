import getConfig from "next/config";
import { createClient } from "redis";

const { REDIS_URL } = getConfig().serverRuntimeConfig;

interface IRedisHistoryValue {
  time: any;
  instruction: string;
  originalText: string;
  completionText: string;
  type: string;
}

export const saveHistory = async (
  // userID: string,
  // history: IRedisHistoryValue
) => {
  console.log(REDIS_URL);
  // const client = createClient({ url: REDIS_URL });

  // client.on("error", (err) => console.log("Redis Client Error", err));

  // await client.connect();
  // const oldValue = await client.get(userID);

  // let newValues = [];
  // if (oldValue) {
  //   newValues = [JSON.parse(oldValue), history];
  // } else {
  //   newValues.push(history);
  // }

  // await client.set(userID, JSON.stringify(newValues));
  // await client.disconnect();
  return;
};
