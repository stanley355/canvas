import { useContext, memo } from "react";
import { Tooltip } from "react-tooltip";
import { TbMicrophone } from "react-icons/tb";

import NextSelect from "@/common/components/NextSelect";

import { SpeechToTextContext } from "./SpeechToTextContext";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "../lib/speechToTextDiffOptions";

const TextToSpeechHeader = () => {
  const { speechToTextDispatch } = useContext(SpeechToTextContext);

  return (
    <div className="p-4 flex items-center justify-between lg:justify-start gap-4 w-full mb-4">
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100">
        <TbMicrophone />
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
