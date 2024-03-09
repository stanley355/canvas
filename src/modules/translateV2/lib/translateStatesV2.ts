export interface ITranslateStatesV2 {
  sourceLanguage: {
    label: string;
    value: string;
  };
  targetLanguage: {
    label: string;
    value: string;
  };
  sourceText: string;
  translatedText: string;
}
export const TRANSLATE_STATES_V2: ITranslateStatesV2 = {
  sourceLanguage: {
    label: "Detect Language",
    value: "",
  },
  targetLanguage: {
    label: "Indonesian",
    value: "Indonesian",
  },
  sourceText: "",
  translatedText: "",
};
