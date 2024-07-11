import { useContext, useState } from "react";
import { TbProgress } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { AppContext } from "@/modules/app/components/AppContext";
import { CheckbotContext } from "./CheckbotContext";
import NextButton from "@/common/components/NextButton";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import {
  PromptsType,
  fetchPrompts,
} from "@/common/lib/api/prompts/fetchPrompts";
import { convertPromptToCheckbotResult } from "../lib/convertPromptToCheckbotResult";

const CheckbotSubmitBtn = () => {
  const { appDispatch } = useContext(AppContext);
  const { checkbotStates, checkbotDispatch } = useContext(CheckbotContext);
  const { instruction, customInstruction, n, temperature, userText } =
    checkbotStates;
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");

    if (!token) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_login);
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (!instruction || (instruction === "custom" && !customInstruction)) {
      toast.error("Instruction can't be empty");
      return;
    }

    if (!userText) {
      toast.error("Text can't be empty");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.checkbot);
    const user = decode(token) as JwtPayload;
    const req = {
      user_id: user.id,
      prompt_type: PromptsType.Checkbot,
      system_content:
        instruction === "custom" ? customInstruction : instruction,
      user_content: userText,
      n,
      temperature,
    };

    const prompts = await fetchPrompts(req);
    setIsLoading(false);

    if (prompts?.status === 402) {
      sendFirebaseEvent(FIREBASE_EVENT_NAMES.show.modal_monthly_limit);
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (prompts?.length > 0) {
      const checkbotResults = prompts.map((prompt) =>
        convertPromptToCheckbotResult(userText, prompt.completion_text)
      );
      checkbotDispatch({ key: "checkbotResults", value: checkbotResults });
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
        <FaRobot />
      )}
      <span>Check</span>
    </NextButton>
  );
};

export default CheckbotSubmitBtn;
