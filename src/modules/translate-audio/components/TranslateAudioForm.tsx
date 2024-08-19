import { TbMicrophone } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

import Button from "@/common/components/Button";
import Select from "@/common/components/Select";

import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "@/modules/speech-to-text/lib/speechToTextDiffOptions";
import TranslateAudioInput from "./TranslateAudioInput";

const TranslateAudioForm = () => {
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const token = Cookies.get("token");
  //   if (!token) {
  //     appDispatch({ key: "showLoginModal", value: true });
  //     return;
  //   }

  //   if (!fileUrl) {
  //     toast.error("Please upload a file");
  //     return;
  //   }

  //   setIsLoading(true);
  //   sendFirebaseEvent(FIREBASE_EVENT_NAMES.translate_audio);
  //   const user = decode(token) as JwtPayload;
  //   const req = {
  //     user_id: user.id,
  //     file_url: fileUrl,
  //     file_name: fileName,
  //     temperature,
  //   };

  //   const translations = await fetchPromptsAudioTranslations(req);
  //   setIsLoading(false);

  //   if (translations?.status === 402) {
  //     appDispatch({ key: "showMonthlyLimitModal", value: true });
  //     return;
  //   }

  //   if (translations?.completion_text) {
  //     translateAudioDispatch({
  //       key: "text",
  //       value: translations.completion_text,
  //     });
  //     return;
  //   }

  //   toast.error("Server busy, please try again");
  //   return;
  // };
  return (
    <>
      <form action="" className="border-x">
        <TranslateAudioInput />
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
