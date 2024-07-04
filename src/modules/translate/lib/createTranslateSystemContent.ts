export const createTranslateSystemContent = (
  firstLanguage: string,
  secondLanguage: string
) => {
  if (firstLanguage === "") {
    const content = `You are a translator. Translate the following text to ${secondLanguage}.`;
    return content;
  }

  const content = `You are a translattor. Translate the following text from ${firstLanguage} to ${secondLanguage}.`;
  return content;
};
