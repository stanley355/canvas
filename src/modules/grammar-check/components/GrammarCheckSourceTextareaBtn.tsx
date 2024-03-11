
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "react-toastify";
import { TbBrandGoogle, TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";

import { Button } from "@/common/components/ui/button";

import { useGrammarCheck } from "../lib/useGrammarCheck";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchAIChatCompletionV2 } from "@/common/lib/api/ai/fetchAIChatCompletionV2";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";

const LoginModal = dynamic(() => import('../../login/components/LoginModal'), { ssr: false });

const GrammarCheckSourceTextareaBtn = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { sourceText, instruction } = grammarCheckStates;

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get('token');
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

    sendFirebaseEvent('grammar_check');
    setIsLoading(true);
    const grammarCheckRes: IChatCompletionRes = await fetchAIChatCompletionV2(
      instruction,
      sourceText
    );

    if (grammarCheckRes.id) {
      setIsLoading(false);
      dispatch({
        name:  "resultText",
        value: grammarCheckRes.choices[0].message.content,
      });
      return;
    }

    setIsLoading(false);
    toast.error("Server Busy, please try again");
    return;
  };

  return (
    <>
      {showLoginModal && <LoginModal />}
      <Button className="w-fit" onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <TbProgress className="text-lg animate-spin" />
            <span>Loading</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <TbBrandGoogle className="text-lg" />
            <span>Check</span>
          </div>
        )}
      </Button>
    </>
  );
};

export default GrammarCheckSourceTextareaBtn;
