import { useContext, memo } from "react";
import { Tooltip } from "react-tooltip";
import { TbMicrophone } from "react-icons/tb";

import NextSelect from "@/common/components/NextSelect";

import { SpeechToTextContext } from "./SpeechToTextContext";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "../lib/speechToTextDiffOptions";
import { SPEECH_TO_TEXT_GRANULARITY_OPTIONS } from "../lib/speechToTextGranularityOptions";

const TextToSpeechHeader = () => {
  const { speechToTextDispatch } = useContext(SpeechToTextContext);

  return (
    <div className="p-4 lg:grid grid-cols-[22.5%_75%] lg:w-1/2 lg:px-0">
      <div className="flex border border-brand-primary items-center gap-1 lg:justify-center rounded-lg p-2 bg-blue-100 mb-4 mx-auto lg:mx-0 w-fit lg:mb-0">
        <TbMicrophone />
        Speech to Text
      </div>
      <div className="flex justify-evenly gap-2 lg:w-full">
        <NextSelect
          id="stt_diff"
          placeholder="Diff: None"
          selectClassname="border-base"
          options={SPEECH_TO_TEXT_DIFF_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(
              FIREBASE_EVENT_NAMES.change.change_stt_diff
            );
            speechToTextDispatch({ key: "temperature", value: option.value });
          }}
        />
        <NextSelect
          id="stt_granularity"
          placeholder="Granularity: None"
          selectClassname="border-base"
          options={SPEECH_TO_TEXT_GRANULARITY_OPTIONS}
          onChange={(option) => {
            sendFirebaseEvent(
              FIREBASE_EVENT_NAMES.change.change_stt_granularity
            );
            speechToTextDispatch({ key: "timestamp_granularities", value: option.value });
          }}
        />
      </div>

      <Tooltip anchorSelect="#stt_diff" className="z-40">
        <div>Higher diff will make the output more random,</div>
        <div>Lower diff will make it more focused and deterministic</div>
      </Tooltip>
      <Tooltip anchorSelect="#stt_granularity" className="z-40">
        <div>The timestamp granularities to populate</div>
        <div>for this transcription. Try it.</div>

      </Tooltip>
    </div>
  );
};

export default memo(TextToSpeechHeader);
