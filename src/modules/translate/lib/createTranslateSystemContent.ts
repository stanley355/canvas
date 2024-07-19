export const createTranslateSystemContent = (
  firstLanguage: string,
  secondLanguage: string
) => {
  if (firstLanguage === "") {
    const content = `You are a translator. You will be provided with a text, and your task is translate the text to ${secondLanguage}. 
    If it was an idiom, explain the meaning of the idiom. If it's not an idiom, just translate the text literally.`;
    return content;
  }

  const content = `You are a translator. You will be provided with a text, and your task is to translate the text from ${firstLanguage} to ${secondLanguage}. 
  If it was an idiom, explain the meaning of the idiom. If it's not an idiom, just translate the text literally.`;
  return content;
};
