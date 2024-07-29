export interface ITranslateAudioStates {
  fileUrl: string;
  fileName: string;
  temperature: number // 0.0 - 1.0
  text: string;
}

export const TRANSLATE_AUDIO_STATES = {
  fileUrl: "",
  fileName: "",
  temperature: 0.0,
  text: ""
}