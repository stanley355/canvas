import { useState } from "react";
import { TbLanguage } from "react-icons/tb";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import CanvasButton from "@/common/components/ui/CanvasButton";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { createTranslateSystemContent } from "../lib/createTranslateSystemContent";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { PromptsV2Type, fetchPromptsV2 } from "@/common/lib/apiV2/prompts/fetchPromptsV2";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), {
  ssr: false,
});

const ExceedLimitModal = dynamic(
  () => import("../../../common/components/ExceedLimitModal"),
  {
    ssr: false,
  }
);

const TranslateSourceTextareaBtn = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText, targetLanguage, sourceLanguage } = translateStates;

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");
    if (!token) {
      toast.info("Please Login to Continue");
      setShowLoginModal(true);
      return;
    }

    if (!sourceText) {
      toast.info("Text could not be empty");
      return;
    }

    if (sourceText.split(" ").length > 5000) {
      toast.info("Text can't be more than 5000 words");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent("translate");

    const user = decode(token) as JwtPayload;

    const system_content = createTranslateSystemContent(sourceLanguage.value, targetLanguage.value);
    const payload = {
      user_id: user.id,
      prompt_type: PromptsV2Type.Translate,
      system_content,
      user_content: `"""${sourceText}"""`,
    };


    const promptResponse = await fetchPromptsV2(payload);
    setIsLoading(false);

    if (promptResponse.completion_text) {
      dispatch({
        type: "SET",
        name: "translatedText",
        value: promptResponse.completion_text,
      });
      return;
    }

    // Payment Required
    if (promptResponse?.status === 402) {
      setShowLimitModal(true);
      return;
    }

    toast.error("Server Busy, please try again");
    return;
  };

  return (
    <>
      <CanvasButton isLoading={isLoading} className="w-fit" onClick={handleClick}>
        <TbLanguage className="text-lg" />
        <span>Translate</span>
      </CanvasButton>

      {showLoginModal && <LoginModal />}
      {showLimitModal && (
        <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />
      )}
    </>
  );
};

export default TranslateSourceTextareaBtn;
