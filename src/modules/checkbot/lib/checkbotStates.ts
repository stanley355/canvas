export interface ICheckbotStates {
  showLoginModal: boolean
  showHistoryBar: boolean
  showNoPlansModal: boolean
  checkbotInstruction: string
  isPersonalInstruction: boolean
  checkbotPersonalInstruction: string
  checkbotText: string
  checkbotCompletion: string
  checkbotCompletionAdded: React.JSX.Element[]
  checkbotCompletionRemoved: React.JSX.Element[]
}


export const CHECKBOT_STATES: ICheckbotStates = {
  showLoginModal: false,
  showHistoryBar: false,
  showNoPlansModal: false,
  checkbotInstruction: "",
  isPersonalInstruction: false,
  checkbotPersonalInstruction: "",
  checkbotText: "",
  checkbotCompletion: "",
  checkbotCompletionAdded: [],
  checkbotCompletionRemoved: [],
};
