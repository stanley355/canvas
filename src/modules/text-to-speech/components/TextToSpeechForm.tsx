import { useContext, useState } from "react"
import { TbProgress, TbX } from "react-icons/tb"

import { TextToSpeechContext } from "./TextToSpeechContext"

import Button from "@/common/components/Button"
import Textarea from "@/common/components/Textarea"
import Select from "@/common/components/Select"

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent"
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames"
import { TTS_VOICE_OPTIONS } from "../lib/ttsVoiceOptions"
import { TTS_SPEED_OPTIONS } from "../lib/ttsSpeedOptions"
import { TTS_RESPONSE_FORMAT_OPTIONS } from "../lib/ttsResponseFormatOptions"
import { toast } from "react-toastify"
import { AppContext } from "@/modules/app/components/AppContext"
import Cookies from "js-cookie"
import { decode, JwtPayload } from "jsonwebtoken"
import { fetchPromptsAudioSpeech } from "@/common/lib/api/prompts/fetchPromptsAudioSpeech"
import { fetchPromptsAudioSpeechDelete } from "@/common/lib/api/prompts/fetchPromptsAudioSpeechDelete"

const TextToSpeechForm = () => {
  const { appDispatch } = useContext(AppContext);
  const { textToSpeechStates, textToSpeechDispatch } = useContext(TextToSpeechContext);
  const { userText, oldFileID, currentFileID } = textToSpeechStates;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault()
    const token = Cookies.get("token");

    if (!token) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_login);
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (!userText) {
      toast.info("Text can't be empty");
      return;
    }

    if (userText.split("").length > 1000) {
      toast.info("Maximum 1.000 characters");
      return;
    }


    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.text_to_speech);

    const target = formEvent.target as any;
    const user = decode(String(token)) as JwtPayload;
    const responseFormat = target.tts_format.value ? target.tts_format.value : TTS_RESPONSE_FORMAT_OPTIONS[0].value
    const req = {
      user_id: user.id,
      input: userText,
      voice: target.tts_voice.value ? target.tts_voice.value : TTS_VOICE_OPTIONS[0].value,
      speed: target.tts_speed.value ? target.tts_speed.value : TTS_SPEED_OPTIONS[1].value,
      response_format: responseFormat
    };

    const prompt = await fetchPromptsAudioSpeech(req);
    setIsLoading(false);

    // Payment Required
    if (prompt?.status === 402) {
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (prompt.id) {
      if (oldFileID) await fetchPromptsAudioSpeechDelete(oldFileID);
      textToSpeechDispatch({ key: "oldFileID", value: currentFileID });
      textToSpeechDispatch({ key: "currentFileID", value: prompt.id });
      textToSpeechDispatch({ key: "audioFormat", value: responseFormat })
      toast.success("Audio updated");
      return;
    }

    toast.error("Server busy, please try again");
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="border rounded-b-md hover:shadow" >
      <div className="flex">
        <Textarea
          placeholder="Enter text"
          rows={10}
          className="border-transparent rounded-none resize-none focus:outline-none"
          value={userText}
          onChange={(e) => textToSpeechDispatch({ key: "userText", value: e.target.value })}
        />
        <Button variant="ghost" type="button" className="p-2 text-2xl" onClick={() => textToSpeechDispatch({ key: 'userText', value: "" })}>
          <TbX />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 p-2 lg:flex-nowrap lg:ml-auto">
        <div className="hidden w-full gap-1 text-sm flex-2 lg:flex">
          <span className={userText.split("").length > 1000 ? "text-red-600 font-semibold" : "text-black"}>{userText.split("").length}</span>
          <span>/ 1000 characters</span>
        </div>
        <Select
          id="tts_voice_select"
          name="tts_voice"
          containerClassname="flex-1"
          options={TTS_VOICE_OPTIONS}
          placeholder={TTS_VOICE_OPTIONS[0].label}
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_voice)}
        />
        <Select
          id="tts_speed_select"
          name="tts_speed"
          containerClassname="flex-1"
          options={TTS_SPEED_OPTIONS}
          placeholder={TTS_SPEED_OPTIONS[1].label}
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_speed)}
        />
        <Select
          id="tts_format_select"
          name="tts_format"
          containerClassname="flex-2 lg:flex-1"
          options={TTS_RESPONSE_FORMAT_OPTIONS}
          placeholder={TTS_RESPONSE_FORMAT_OPTIONS[0].label}
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_format)}
        />
        <div className="flex flex-1 w-full gap-1 text-sm lg:hidden">
          <span className={userText.split("").length > 1000 ? "text-red-600 font-semibold" : "text-black"}>{userText.split("").length}</span>
          <span>/ 1000 characters</span>
        </div>
        <Button type="submit" className="ml-auto" disabled={isLoading}>
          {isLoading ?
            <div className="flex items-center gap-2">
              <TbProgress className="animate-spin" />
              <span>Generating</span>
            </div> :
            "Generate"
          }
        </Button>
      </div>
    </form>
  )
}

export default TextToSpeechForm
