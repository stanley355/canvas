import { TbX } from "react-icons/tb"
import Button from "@/common/components/Button"
import Textarea from "@/common/components/Textarea"
import Select from "@/common/components/Select"
import { TTS_VOICE_OPTIONS } from "../lib/ttsVoiceOptions"
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent"
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames"
import { TTS_SPEED_OPTIONS } from "../lib/ttsSpeedOptions"

const TextToSpeechForm = () => {
  return (
    <form action="">
      <div className="flex">
        <Textarea placeholder="Enter text" rows={10} className="border-transparent rounded-none resize-none focus:outline-none" />
        <Button variant="ghost" className="p-2 text-2xl">
          <TbX />
        </Button>
      </div>
      <div className="flex gap-2">
        <Select
          id="tts_voice"
          placeholder="Voice: Alpha"
          options={TTS_VOICE_OPTIONS}
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_voice)}
        />
        <Select
          id="tts_speed"
          placeholder="Speed: Normal"
          options={TTS_SPEED_OPTIONS}
          onChange={() => sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_speed)}
        />

      </div>
    </form>
  )
}

export default TextToSpeechForm
