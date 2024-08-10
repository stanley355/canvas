import { TbX } from "react-icons/tb"
import Button from "@/common/components/Button"
import Textarea from "@/common/components/Textarea"
import Select from "@/common/components/Select"
import { TTS_VOICE_OPTIONS } from "../lib/ttsVoiceOptions"
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent"
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames"
import { TTS_SPEED_OPTIONS } from "../lib/ttsSpeedOptions"
import { TTS_RESPONSE_FORMAT_OPTIONS } from "../lib/ttsResponseFormatOptions"
import { useContext } from "react"
import { TextToSpeechContext } from "./TextToSpeechContext"

const TextToSpeechForm = () => {
  const { textToSpeechStates, textToSpeechDispatch } = useContext(TextToSpeechContext);
  const { userText } = textToSpeechStates;

  return (
    <form action={(formData)=> {}} className="border hover:shadow">
      <div className="flex">
        <Textarea placeholder="Enter text" rows={10} className="border-transparent rounded-none resize-none focus:outline-none" 
        value={userText} 
        onChange={(e) => textToSpeechDispatch({ key: "userText", value: e.target.value })} />
        <Button variant="ghost" type="button" className="p-2 text-2xl" onClick={()=> textToSpeechDispatch({key: 'userText', value: ""})}>
          <TbX />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 p-2 lg:flex-nowrap lg:w-1/2 lg:ml-auto">
        <Select
          id="tts_voice"
          placeholder="Voice: Alpha"
          options={TTS_VOICE_OPTIONS}
          containerClassname="flex-1"
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_voice)}
        />
        <Select
          id="tts_speed"
          placeholder="Speed: Normal"
          options={TTS_SPEED_OPTIONS}
          containerClassname="flex-1"
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_speed)}
        />
        <Select
          id="tts_response_format"
          placeholder="Format: Mp3"
          options={TTS_RESPONSE_FORMAT_OPTIONS}
          containerClassname="flex-2 lg:flex-1"
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_format)}
        />
        <Button type="submit" className="ml-auto">Generate</Button>
      </div>
    </form>
  )
}

export default TextToSpeechForm
