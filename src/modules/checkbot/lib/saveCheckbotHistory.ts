import { ICheckbotStates } from "./checkbotStates";

export const saveCheckbotHistory = (
  checkbotStates: ICheckbotStates,
  chatCompletionContent: string
) => {
  const { checkbotText, checkbotInstruction } = checkbotStates;
  const historyPayload = {
    time: new Date(),
    instruction: checkbotInstruction,
    checkbotText,
    checkbotCompletion: chatCompletionContent,
  };

  const oldHistory = sessionStorage.getItem("history_checkbot");
  if (!oldHistory) {
    const newHistory = [historyPayload];
    sessionStorage.setItem("history_checkbot", JSON.stringify(newHistory));
    return;
  }

  const historyArr = JSON.parse(oldHistory);
  const newHistory = [...historyArr, historyPayload];
  sessionStorage.setItem("history_checkbot", JSON.stringify(newHistory));
  return;
};
