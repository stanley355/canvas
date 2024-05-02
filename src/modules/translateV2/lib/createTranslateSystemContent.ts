export const createTranslateSystemContent = (sourceLanguage: string, targetLanguage: string) => {
  if (sourceLanguage === "") {
    const content = `You are a translator. Translate the text to ${targetLanguage}`;
    return content;
  }

  const content = `Translate the following sentence from ${sourceLanguage} to ${targetLanguage}`;
  return content;
}