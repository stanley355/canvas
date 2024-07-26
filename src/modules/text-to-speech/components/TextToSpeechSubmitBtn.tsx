import { useContext, useState } from "react";
import { TbProgress, TbSpeakerphone } from "react-icons/tb";
import { toast } from "react-toastify";
import { JwtPayload, decode } from "jsonwebtoken";
import Cookies from "js-cookie";

import { AppContext } from "@/modules/app/components/AppContext";
import { TextToSpeechContext } from "./TextToSpeechContext";
import NextButton from "@/common/components/NextButton";

import { fetchPromptsDeleteTtsFile } from "@/common/lib/api/prompts/fetchPromptsTtsDeleteFile";
import { fetchPromptsAudioSpeech, PromptAudioSpeechVoice } from "@/common/lib/api/prompts/fetchPromptsAudioSpeech";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";


const TextToSpeechSubmitBtn = () => {
  const { appDispatch } = useContext(AppContext);
  const { textToSpeechStates, textToSpeechDispatch } =
    useContext(TextToSpeechContext);
  const { userText, oldFileID, currentFileID, speed, voice } =
    textToSpeechStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");

    if (!token) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_login);
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (!userText) {
      toast.info("Text can't be empty");
      return;
    }

    if (userText.split("").length > 4000) {
      toast.info("Maximum 4.000 characters");
      return;
    }

    sendFirebaseEvent(FIREBASE_EVENT_NAMES.text_to_speech);
    setIsLoading(true);

    const user = decode(String(token)) as JwtPayload;
    const req = {
      user_id: user.id,
      input: userText,
      voice,
      speed,
    };
    const prompt = await fetchPromptsAudioSpeech(req);
    setIsLoading(false);

    // Payment Required
    if (prompt?.status === 402) {
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (prompt.id) {
      if (oldFileID) await fetchPromptsDeleteTtsFile(oldFileID);
      textToSpeechDispatch({ key: "oldFileID", value: currentFileID });
      textToSpeechDispatch({ key: "currentFileID", value: prompt.id });
      toast.success("Audio updated");
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
        <TbSpeakerphone />
      )}
      {isLoading ? "This may take a while" : "Convert"}
    </NextButton>
  );
};

export default TextToSpeechSubmitBtn;
