
import { useState } from "react";
import { TbLanguage, TbProgress } from "react-icons/tb";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { Button } from "@/common/components/ui/button";
import { fetchAIChatCompletionV2 } from "@/common/lib/api/ai/fetchAIChatCompletionV2";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";
import Cookies from "js-cookie";

const LoginModal = dynamic(() => import('../../login/components/LoginModal'), { ssr: false });

const TranslateSourceTextareaBtn = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText, targetLanguage } = translateStates;

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

    setIsLoading(true);
    const system = `You are a translator. Translate the text to ${targetLanguage.value}`;
    const translateRes: IChatCompletionRes = await fetchAIChatCompletionV2(
      system,
      sourceText
    );

    if (translateRes.id) {
      setIsLoading(false);
      dispatch({
        type: "SET",
        name: "translatedText",
        value: translateRes.choices[0].message.content,
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
            <TbLanguage className="text-lg" />
            <span>Translate</span>
          </div>
        )}
      </Button>
    </>
  );
};

export default TranslateSourceTextareaBtn;
