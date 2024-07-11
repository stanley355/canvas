import { useContext, memo } from "react";
import { Tooltip } from "react-tooltip";

import NextSelect from "@/common/components/NextSelect";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { TbSpeakerphone } from "react-icons/tb";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "../lib/speechToTextDiffOptions";
import { SpeechToTextContext } from "./SpeechToTextContext";

const TextToSpeechHeader = () => {
  const {speechToTextDispatch} = useContext(SpeechToTextContext);
  // const { textToSpeechDispatch } = useContext(TextToSpeechContext);

  return (
    <div className="p-4 flex items-center justify-between lg:justify-start gap-4 w-full">
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100">
        <TbSpeakerphone />
        Speech to Text
      </div>
      <NextSelect
        id="stt_diff"
        placeholder="Diff: None"
        containerClassname="w-fit"
        selectClassname="border-base w-fit"
        options={SPEECH_TO_TEXT_DIFF_OPTIONS}
        onChange={(option) => {
          sendFirebaseEvent(
            FIREBASE_EVENT_NAMES.change.change_checkbot_temperature
          );
          speechToTextDispatch({ key: "temperature", value: option.value });
        }}
      />

      <Tooltip anchorSelect="#stt_diff" className="z-40">
        <div>Higher diff will make the output more random,</div>
        <div>Lower diff will make it more focused and deterministic</div>
      </Tooltip>
    </div>
  );
};

export default memo(TextToSpeechHeader);
