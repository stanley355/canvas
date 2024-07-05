export interface ICheckbotStates {
  n: 1 | 2 | 3;
  temperature: 0.0 | 0.5 | 1.0 | 1.5;
}

export const CHECKBOT_STATES: ICheckbotStates = {
  n: 1,
  temperature: 1.0
}