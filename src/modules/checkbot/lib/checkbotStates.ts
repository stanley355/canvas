export enum CheckbotResultFormatEnum {
  NoDiff,
  Added,
  Removed,
}

export interface ICheckbotStates {
  showLoginModal: boolean;
  showHistoryBar: boolean;
  showNoPlansModal: boolean;
  showPaylaterOffer: boolean;
  checkbotInstruction: string;
  isPersonalInstruction: boolean;
  checkbotPersonalInstruction: string;
  checkbotText: string;
  checkbotCompletion: string;
  checkbotCompletionAdded: any[];
  checkbotCompletionRemoved: any[];
  checkbotResultFormat: CheckbotResultFormatEnum;
}

export const CHECKBOT_STATES: ICheckbotStates = {
  showLoginModal: false,
  showHistoryBar: false,
  showNoPlansModal: false,
  showPaylaterOffer: false,
  checkbotInstruction: "",
  isPersonalInstruction: false,
  checkbotPersonalInstruction: "",
  checkbotText: "",
  checkbotCompletion: "",
  checkbotCompletionAdded: [],
  checkbotCompletionRemoved: [],
  checkbotResultFormat: CheckbotResultFormatEnum.NoDiff,
};
