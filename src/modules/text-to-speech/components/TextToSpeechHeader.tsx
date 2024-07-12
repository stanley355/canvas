import { useContext, memo } from "react";
import { Tooltip } from "react-tooltip";

import NextSelect from "@/common/components/NextSelect";
import { TextToSpeechContext } from "./TextToSpeechContext";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { TbSpeakerphone } from "react-icons/tb";
import { TTS_SPEED_OPTIONS } from "../lib/ttsSpeedOptions";
import { TTS_VOICE_OPTIONS } from "../lib/ttsVoiceOptions";

const TextToSpeechHeader = () => {
  const { textToSpeechDispatch } = useContext(TextToSpeechContext);

  return (
    <div className="p-4 lg:grid grid-cols-[25%_75%] lg:gap-2 lg:w-1/2 lg:px-0">
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100 mb-4 mx-auto lg:mx-0 w-full lg:mb-0 lg:mr-2">
        <TbSpeakerphone />
        Text to Speech
      </div>
      <div className="flex justify-evenly gap-2 lg:w-full">
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
      </div>
    </div>
  );
};

export default memo(TextToSpeechHeader);
