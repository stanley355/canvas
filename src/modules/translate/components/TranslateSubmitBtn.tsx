import { useContext, useState } from "react";
import { TbLanguage, TbProgress } from "react-icons/tb";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import NextButton from "@/common/components/NextButton";
import { TranslateContext } from "./TranslateContext";

import { AppContext } from "@/modules/app/components/AppContext";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { createTranslateSystemContent } from "../lib/createTranslateSystemContent";
import { JwtPayload, decode } from "jsonwebtoken";
import {
  PromptsType,
  fetchPrompts,
} from "@/common/lib/api/prompts/fetchPrompts";

const TranslateSubmitBtn = () => {
  const { appDispatch } = useContext(AppContext);
  const { translateStates, translateDispatch } = useContext(TranslateContext);
  const { firstLanguageText, firstLanguage, secondLanguage, n, temperature } =
    translateStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");

    if (!token) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_login);
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (firstLanguageText === "") {
      toast.info("Text can't be empty");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.translate);
    const user = decode(token) as JwtPayload;

    const req = {
      user_id: user.id,
      prompt_type: PromptsType.Translate,
      system_content: createTranslateSystemContent(
        firstLanguage,
        secondLanguage
      ),
      user_content: firstLanguageText,
      ...(n !== 1 && { n }),
      ...(temperature !== 1.0 && { temperature }),
    };

    const prompts = await fetchPrompts(req);
    setIsLoading(false);

    if (prompts?.status === 402) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_monthly_limit);
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (prompts?.length > 0) {
      translateDispatch({
        key: "secondLanguageTexts",
        value: prompts.map((prompt) => prompt.completion_text),
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
        <TbLanguage />
      )}
      <span>Translate</span>
    </NextButton>
  );
};

export default TranslateSubmitBtn;
