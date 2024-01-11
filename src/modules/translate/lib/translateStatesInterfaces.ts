export interface ITranslateStates {
  showLoginModal: boolean
  showHistoryBar: boolean
  showNoPlansModal: boolean
  showPaylaterOffer: boolean;
  translateLanguage: ITranslateLanguage
  translateContext: string
  translateText: string
  translateCompletion: string
}

export interface ITranslateLanguage {
  label: string
  value: string
}
