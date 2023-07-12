import axios from "axios";

interface IHistoryValue {
  time: any;
  instruction: string;
  originalText: string;
  completionText: string;
  type: string;
}

export const saveHistory = async (
  history: IHistoryValue
) => {
  const oldHistory =  sessionStorage.getItem("history");

  if (!oldHistory) {
    const newHistory = [history];
    sessionStorage.setItem("history", JSON.stringify(newHistory));
    return;
  } 

  const historyArr = JSON.parse(oldHistory);
  const newHistory = [...historyArr, history];
  sessionStorage.setItem("history", JSON.stringify(newHistory));
};
