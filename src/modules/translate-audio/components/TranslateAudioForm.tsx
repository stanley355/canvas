import Button from "@/common/components/Button";
import Select from "@/common/components/Select";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "@/modules/speech-to-text/lib/speechToTextDiffOptions";
import { TbMicrophone } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

const TranslateAudioForm = () => {
  return (
    <>
      <form action="" className="border-x">
        <Button
          type="button"
          className="w-full h-40 gap-2 text-base rounded-none"
          variant="ghost"
        >
          <TbMicrophone />
          Click here to upload
        </Button>

        <div className="flex items-center gap-2 p-2 lg:w-1/4 lg:ml-auto">
          <Select
            containerId="translate_audio_diff_select"
            name="translate_audio_diff"
            placeholder={String(SPEECH_TO_TEXT_DIFF_OPTIONS[2].label)}
            options={SPEECH_TO_TEXT_DIFF_OPTIONS}
            onChange={() =>
              sendFirebaseEvent(
                FIREBASE_EVENT_NAMES.change.change_translate_audio_diff
              )
            }
          />

          <Button type="submit" className="flex-1">
            Translate
          </Button>
        </div>
      </form>
      <Tooltip anchorSelect="#translate_audio_diff_select">
        <div>Higher diff will make the output more random,</div>
        <div>Lower diff will make it more focused and deterministic</div>
      </Tooltip>
    </>
  );
};

export default TranslateAudioForm;
