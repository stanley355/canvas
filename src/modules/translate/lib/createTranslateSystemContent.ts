export const createTranslateSystemContent = (
  firstLanguage: string,
  secondLanguage: string
) => {
  if (firstLanguage === "") {
    const content = `You are a translator. You will be provided with a text, and your task is translate the text to ${secondLanguage}.`;
    return content;
  }

  const content = `You are a translattor. You will be provided with a text, and your task is to translate the text from ${firstLanguage} to ${secondLanguage}.`;
  return content;
};
