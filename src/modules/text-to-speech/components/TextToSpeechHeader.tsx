import { useContext, memo } from "react";
import { Tooltip } from "react-tooltip";

import NextSelect from "@/common/components/NextSelect";
import { TextToSpeechContext } from "./TextToSpeechContext";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { TbSpeakerphone } from "react-icons/tb";
import { TTS_SPEED_OPTIONS } from "../lib/ttsSpeedOptions";
import { TTS_VOICE_OPTIONS } from "../lib/ttsVoiceOptions";
import Button from "@/common/components/Button";
// import Select from "@/common/components/Select";

const TextToSpeechHeader = () => {
  const { textToSpeechDispatch } = useContext(TextToSpeechContext);

  return (
    <div >
      <h1 className="p-4 font-semibold border-b">Text to Speech</h1>
        {/* <S:tab */}
      {/* <div className="flex items-center w-full gap-1 p-2 mx-auto mb-4 bg-blue-100 border rounded-lg border-brand-primary lg:justify-center lg:mx-0 lg:mb-0 lg:mr-2">
        <TbSpeakerphone />
        Text to Speech
      </div>
      <div className="flex gap-2 justify-evenly lg:w-full">
        <NextSelect
          id="tts_voice"
          placeholder="Voice: Alpha"
          selectClassname="border-base"
          options={TTS_VOICE_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_voice);
            textToSpeechDispatch({ key: "voice", value: option.value });
          }}
        />
        <NextSelect
          id="tts_speed"
          placeholder="Speed: Normal"
          selectClassname="border-base"
          options={TTS_SPEED_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_tts_speed);
            textToSpeechDispatch({ key: "speed", value: option.value });
          }}
        />
        <Tooltip anchorSelect="#tts_voice" className="z-40">
          The voice to use when generating the audio.
        </Tooltip>
        <Tooltip anchorSelect="#tts_speed" className="z-40">
          The speed of the generated audio.
        </Tooltip>
      </div> */}
    </div>
  );
};

export default memo(TextToSpeechHeader);
