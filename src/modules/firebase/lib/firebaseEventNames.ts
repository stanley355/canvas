// event names - page - desc
export const FIREBASE_EVENT_NAMES = {
  translate: "translate",
  checkbot: "checkbot",
  text_to_speech: "text_to_speech",
  speech_to_text: "speech_to_text",
  phonetic_transcriptions: "phonetic_transcription",
  student_application: "student_application",
  translate_audio: "translate_audio",
  login: {
    login: "login",
    loginGoogle: "login_google",
  },
  click: {
    premium: "click_premium",
    premium_student: "click_premium_student",
    limit_modal_student: "click_limit_modal_student",
    limit_modal_premium: "click_limit_modal_premium",
    checkbot_added: "click_checkbot_added",
    checkbot_removed: "click_checkbot_added",
    student_home_hero_cta: "click_student_home_hero_cta",
    home_tellmewhy: "click_home_tellmewhy",
    home_getstarted: "click_home_getstarted",
    stt_csv_export: "click_stt_csv_export",
    stt_upload: "click_stt_upload",
    translate_audio_upload: 'click_translate_audio_upload'
  },
  change: {
    change_translate_n: "change_translate_n",
    change_translate_temperature: "change_translate_temperature",
    change_checkbot_n: "change_checkbot_n",
    change_checkbot_temperature: "change_checkbot_temperature",
    change_tts_voice: "change_tts_voice",
    change_tts_speed: "change_tts_speed",
    change_tts_format: "change_tts_format",
    change_stt_diff: "change_stt_diff",
    change_stt_granularity: "change_stt_granularity",
    change_stt_language: "change_stt_language",
    change_phonetic_transcription_language:
      "change_phonetic_transcription_language",
    change_translate_audio_diff: "change_translate_audio_diff"
  },
  show: {
    modal_login: "show_modal_login",
    modal_monthly_limit: "show_modal_monthly_limit",
  },
};
