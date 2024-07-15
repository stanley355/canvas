import { useContext, useState } from "react";
import { CgTranscript } from "react-icons/cg";
import { TbProgress } from "react-icons/tb";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decode, JwtPayload } from "jsonwebtoken";

import NextButton from "@/common/components/NextButton";
import { AppContext } from "@/modules/app/components/AppContext";
import { PhoneticTranscriptionsContext } from "./PhoneticTranscriptionsContext";

import {
  fetchPrompts,
  PromptsType,
} from "@/common/lib/api/prompts/fetchPrompts";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

const PhoneticTranscriptionsSubmitBtn = () => {
  const { appDispatch } = useContext(AppContext);
  const { phoneticTranscriptionsStates, phoneticTranscriptionsDispatch } =
    useContext(PhoneticTranscriptionsContext);
  const { language, userText } = phoneticTranscriptionsStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");

    if (!token) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_login);
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (language === "") {
      toast.info("Please select language");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.phonetic_transcriptions);
    const user = decode(token) as JwtPayload;

    const req = {
      user_id: user.id,
      prompt_type: PromptsType.PhoneticTranscriptions,
      system_content: `You are a phonetic transcriptor. You will be provided with a text in ${language} and your task is to transcribe them to phonetic transcription`,
      user_content: userText,
      n: 1,
      temperature: 0.0,
    };

    const prompts = await fetchPrompts(req);
    setIsLoading(false);

    if (prompts?.status === 402) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_monthly_limit);
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (prompts?.length > 0) {
      phoneticTranscriptionsDispatch({
        key: "resultText",
        value: prompts[0].completion_text,
      });
      return;
    }

    toast.error("Server busy, please try again");
    return;
  };

  return (
    <NextButton
      disabled={isLoading}
      onClick={handleClick}
      variant={isLoading ? "disabled" : "default"}
      className="absolute bottom-4 right-2 p-2"
    >
      {isLoading ? (
        <TbProgress className="animate-spin text-brand-primary" />
      ) : (
        <CgTranscript />
      )}
      <span>{isLoading ? "This may take a while" : "Convert"}</span>
    </NextButton>
  );
};

export default PhoneticTranscriptionsSubmitBtn;
