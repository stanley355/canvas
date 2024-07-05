export interface ITextToSpeechStates {
  userText: string;
  currentFileID: string;
  oldFileID: string;
}

export const TEXT_TO_SPEECH_STATES :ITextToSpeechStates  ={
  userText: "",
  currentFileID: "",
  oldFileID: ""
}