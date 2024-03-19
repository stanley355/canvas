import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TbBrandGoogle, TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { Button } from "@/common/components/ui/button";
import { useGrammarCheck } from "../lib/useGrammarCheck";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { createRemovedAndAddedDiff } from "@/common/lib/createRemovedAndAddedDiff";
import { fetchNewPrompts } from "@/common/lib/api/prompts/fetchNewPrompts";
import { IFetchNewPromptsRes } from "@/common/lib/api/prompts/interfaces";
import { IAxiosErrorRes } from "@/common/lib/api/axiosErrorHandler";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), {
  ssr: false,
});

const ExceedLimitModal = dynamic(() => import("../../../common/components/ExceedLimitModal"), {
  ssr: false
})

const GrammarCheckSourceTextareaBtn = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { sourceText, instruction } = grammarCheckStates;

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
    sendFirebaseEvent("grammar_check");

    const user = decode(token) as JwtPayload;
    const payload = {
      user_id: user.id,
      system_prompt: instruction,
      user_prompt: sourceText,
      prompt_type: "GrammarCheck",
    };
    const grammarCheckRes: IFetchNewPromptsRes & IAxiosErrorRes = await fetchNewPrompts(payload);

    if (grammarCheckRes.completion_text) {
      setIsLoading(false);
      setLoadingText("");
      const finalText = grammarCheckRes.completion_text;
      const removedAddedDiff = createRemovedAndAddedDiff(sourceText, finalText);

      dispatch({
        name: "resultText",
        value: finalText,
      });
      dispatch({
        name: "resultTextAdded",
        value: removedAddedDiff.addedDiff,
      });
      dispatch({
        name: "resultTextRemoved",
        value: removedAddedDiff.removedDiff,
      });
      return;
    }

    if (grammarCheckRes.status && grammarCheckRes.status === 400) {
      if (grammarCheckRes?.data?.status === 600) {
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
            <TbBrandGoogle className="text-lg" />
            <span>Check</span>
          </div>
        )}
      </Button>
      {showLoginModal && <LoginModal />}
      {showLimitModal && <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />}
    </>
  );
};

export default GrammarCheckSourceTextareaBtn;
