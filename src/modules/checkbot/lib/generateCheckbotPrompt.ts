export const generateCheckbotPrompt = (
    instruction: string,
    outputLang: string,
    text: string
  ) => {
    let baseMsg = `${instruction} the following text: "${text}"`;

    if (outputLang) {
      baseMsg + " " + `in ${outputLang}`;
    }
    return {
      message: baseMsg,
    };
  };