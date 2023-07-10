import axios from "axios";

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
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/redis/history/`;
  const saveHistoryPayload = {
    userID,
    history,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: saveHistoryPayload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
