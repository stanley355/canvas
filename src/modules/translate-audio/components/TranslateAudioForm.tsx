import { FormEvent, useContext, useState } from "react";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import Select from "@/common/components/Select";
import TranslateAudioInput from "./TranslateAudioInput";

import { AppContext } from "@/modules/app/components/AppContext";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from "@/modules/speech-to-text/lib/speechToTextDiffOptions";
import { TranslateAudioContext } from "./TranslateAudioContext";
import { decode, JwtPayload } from "jsonwebtoken";

const TranslateAudioForm = () => {
  const { appDispatch } = useContext(AppContext);
  const { translateAudioStates, translateAudioDispatch } = useContext(TranslateAudioContext);
  const { fileUrl } = translateAudioStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;

    const token = Cookies.get("token");
    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (!fileUrl) {
      toast.error("Please upload a file");
      return;
    }

    // setIsLoading(true);
    // sendFirebaseEvent(FIREBASE_EVENT_NAMES.translate_audio);
    // const user = decode(token) as JwtPayload;
    // const req = {
    //   user_id: user.id,
    //   file_url: fileUrl,
    //   file_name: fileName,
    //   temperature,
    // };

    // const translations = await fetchPromptsAudioTranslations(req);
    // setIsLoading(false);

    // if (translations?.status === 402) {
    //   appDispatch({ key: "showMonthlyLimitModal", value: true });
    //   return;
    // }

    // if (translations?.completion_text) {
    //   translateAudioDispatch({
    //     key: "text",
    //     value: translations.completion_text,
    //   });
    //   return;
    // }

    toast.error("Server busy, please try again");
    return;
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="border-x">
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
