import { ITranslateStates } from "./translateStatesInterfaces";

export const saveTranslateHistory = (
  translateStates: ITranslateStates,
  chatCompletionContent: string
) => {
  const { translateLanguage, translateText } = translateStates;
  const historyPayload = {
    time: new Date(),
    instruction: `Translate to ${translateLanguage?.value}`,
    translateText,
    translateCompletion: chatCompletionContent,
  };

  const oldHistory = sessionStorage.getItem("history_translate");
  if (!oldHistory) {
    const newHistory = [historyPayload];
    sessionStorage.setItem("history_translate", JSON.stringify(newHistory));
    return;
  }

  const historyArr = JSON.parse(oldHistory);
  const newHistory = [...historyArr, historyPayload];
  sessionStorage.setItem("history_translate", JSON.stringify(newHistory));
  return;
};
