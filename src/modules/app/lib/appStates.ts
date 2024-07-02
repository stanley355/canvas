export interface IAppStates {
  showLoginModal: boolean;
  showMonthlyLimitModal: boolean;
  // lang: "en-US" | "id-ID",
  // theme: "dark" | "light"
}

export const APP_STATES = {
  showLoginModal: false,
  showMonthlyLimitModal: false,
}