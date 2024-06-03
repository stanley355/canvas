import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "react-toastify";
import { TbBrandGoogle } from "react-icons/tb";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { useGrammarCheck } from "../lib/useGrammarCheck";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { createRemovedAndAddedDiff } from "@/common/lib/createRemovedAndAddedDiff";
import {
  PromptsV2Type,
  fetchPromptsV2,
} from "@/common/lib/apiV2/prompts/fetchPromptsV2";
import CanvasButton from "@/common/components/ui/CanvasButton";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), {
  ssr: false,
});

const ExceedLimitModal = dynamic(
  () => import("../../../common/components/ExceedLimitModal"),
  {
    ssr: false,
  }
);

const GrammarCheckSourceTextareaBtn = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { sourceText, instruction } = grammarCheckStates;

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
    sendFirebaseEvent("grammar_check");

    const user = decode(token) as JwtPayload;
    const payload = {
      user_id: user.id,
      system_content: instruction,
      user_content: sourceText,
      prompt_type: PromptsV2Type.GrammarCheck,
    };
    const promptResponse = await fetchPromptsV2(payload);

    setIsLoading(false);

    // Payment Required
    if (promptResponse?.status === 402) {
      setShowLimitModal(true);
      return;
    }

    if (promptResponse[0].completion_text) {
      const removedAddedDiff = createRemovedAndAddedDiff(
        sourceText,
        promptResponse[0].completion_text
      );

      dispatch({
        name: "resultText",
        value: promptResponse[0].completion_text,
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

    toast.error("Server Busy, please try again");
    return;
  };

  return (
    <>
      <CanvasButton isLoading={isLoading} onClick={handleClick}>
        <TbBrandGoogle className="text-lg" />
        <span>Check</span>
      </CanvasButton>
      {showLoginModal && <LoginModal />}
      {showLimitModal && (
        <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />
      )}
    </>
  );
};

export default GrammarCheckSourceTextareaBtn;
