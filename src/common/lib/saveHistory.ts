import getConfig from "next/config";
import { createClient } from "redis";


interface IRedisHistoryValue {
  time: any;
  instruction: string;
  originalText: string;
  completionText: string;
  type: string;
}

export const saveHistory = async (
  userID: string,
  history: IRedisHistoryValue
) => {
  
};
