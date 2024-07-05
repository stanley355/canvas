import { Change } from "diff";

export interface ICheckbotResult {
  base: string;
  removed: Change[];
  added: Change[]
}

export interface ICheckbotStates {
  n: 1 | 2 | 3;
  temperature: 0.0 | 0.5 | 1.0 | 1.5;
  instruction: string;
  customInstruction: string;
  userText: string;
  checkbotResults: ICheckbotResult[]
}

export const CHECKBOT_STATES: ICheckbotStates = {
  n: 1,
  temperature: 1.0,
  instruction: "",
  customInstruction: "",
  userText: "",
  checkbotResults: []
}