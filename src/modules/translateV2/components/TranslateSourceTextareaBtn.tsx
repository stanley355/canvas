import { useEffect, useState } from "react";
import { TbLanguage, TbProgress } from "react-icons/tb";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { useTranslateV2 } from "../lib/useTranslateV2";
import { Button } from "@/common/components/ui/button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchNewPrompts } from "@/common/lib/api/prompts/fetchNewPrompts";
import { IFetchNewPromptsRes } from "@/common/lib/api/prompts/interfaces";
import { IAxiosErrorRes } from "@/common/lib/api/axiosErrorHandler";
import { createTranslateSystemContent } from "../lib/createTranslateSystemContent";

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
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoadingText("In progress"), 2000);
      setTimeout(() => setLoadingText("Hang on there"), 4000);
      setTimeout(() => setLoadingText("Cleaning up"), 6000);
    }
  }, [isLoading]);

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

    
    const system = createTranslateSystemContent(sourceLanguage.value, targetLanguage.value);
    const payload = {
      user_id: user.id,
      system_prompt: system,
      user_prompt: sourceText,
      prompt_type: "Translate",
    };
    const translateRes: IFetchNewPromptsRes & IAxiosErrorRes =
      await fetchNewPrompts(payload);

    if (translateRes.completion_text) {
      setIsLoading(false);
      setLoadingText("");
      dispatch({
        type: "SET",
        name: "translatedText",
        value: translateRes.completion_text,
      });
      return;
    }

    if (translateRes.status && translateRes.status === 400) {
      if (translateRes?.data?.status === 600) {
        setIsLoading(false);
        setLoadingText("");
        setShowLimitModal(true);
        return;
      }
    }

    setIsLoading(false);
    setLoadingText("");
    toast.error("Server Busy, please try again");
    return;
  };

  return (
    <>
      <Button className="w-fit" onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <TbProgress className="text-lg animate-spin" />
            <span>{loadingText ? loadingText : "Loading"}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <TbLanguage className="text-lg" />
            <span>Translate</span>
          </div>
        )}
      </Button>
      {showLoginModal && <LoginModal />}
      {showLimitModal && (
        <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />
      )}
    </>
  );
};

export default TranslateSourceTextareaBtn;
