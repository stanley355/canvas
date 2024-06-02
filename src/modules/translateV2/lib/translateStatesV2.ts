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
  translatedTexts: string[];
  resultVariant: number;
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
  translatedTexts: [],
  resultVariant: 1,
};
