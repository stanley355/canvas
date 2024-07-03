export interface ITranslateStates {
  firstLanguage: string;
  secondLanguage: string;
  n: 1 | 2 | 3;
  temperature: 0.5 | 1 | 1.5;
  firstLanguageText: string;
  secondLanguageTexts:string[];
}

export const TRANSLATE_STATES: ITranslateStates = {
  firstLanguage: "",
  secondLanguage: "Indonesian",
  n: 1,
  temperature: 1,
  firstLanguageText: "",
  secondLanguageTexts: []
};
