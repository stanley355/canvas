export enum CheckbotResultFormatEnum {
  NoDiff,
  Added,
  Removed,
}

export interface ICheckbotStates {
  showLoginModal: boolean;
  showHistoryBar: boolean;
  showNoPlansModal: boolean;
  checkbotInstruction: string;
  isPersonalInstruction: boolean;
  checkbotPersonalInstruction: string;
  checkbotText: string;
  checkbotCompletion: string;
  checkbotCompletionAdded: React.JSX.Element[];
  checkbotCompletionRemoved: React.JSX.Element[];
  checkbotResultFormat: CheckbotResultFormatEnum;
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
  checkbotResultFormat: CheckbotResultFormatEnum.NoDiff,
};
