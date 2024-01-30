import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import { decode } from "jsonwebtoken";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import { useCheckbot } from "../lib/useCheckbot";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { checkUserHasOngoingPlan } from "@/common/lib/checkUserHasOngoingPlan";
import { fetchAIChatCompletion } from "@/common/lib/api/ai/fetchAIChatCompletion";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";
import { fetchUserPrompts } from "@/common/lib/api/prompts/fetchUserPrompts";
import { fetchUserPremiumPrompts } from "@/common/lib/api/prompts/fetchUserPremiumPrompts";
import { createRemovedAndAddedDiff } from "@/common/lib/createRemovedAndAddedDiff";
import { saveCheckbotHistory } from "../lib/saveCheckbotHistory";

const CheckbotSubmitBtn = () => {
  const { checkbotStates, dispatch } = useCheckbot();
  const {
    checkbotText,
    checkbotInstruction,
    checkbotPersonalInstruction,
    isPersonalInstruction,
  } = checkbotStates;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const token: any = Cookies.get("token");
    if (!token) {
      dispatch({
        type: "SET",
        name: "showLoginModal",
        value: true,
      });
      sendFirebaseEvent("login_popup");
      return;
    }

    if (!checkbotInstruction) {
      toast.warning("Harap pilih instruksi");
      return;
    }

    if (isPersonalInstruction && !checkbotPersonalInstruction) {
      toast.warning("Harap masukkan instruksi");
      return;
    }

    if (!checkbotText) {
      toast.warning("Harap masukkan teks Anda");
      return;
    }

    setIsLoading(true);
    const user: any = decode(token);
    const userHasOngoingPlan = await checkUserHasOngoingPlan(user);

    if (!userHasOngoingPlan.hasOngoingPlan) {
      dispatch({ type: "SET", name: "showNoPlansModal", value: true });
      setIsLoading(false);
      return;
    }

    sendFirebaseEvent("checkbot");

    const prompt = checkbotPersonalInstruction
      ? `${checkbotPersonalInstruction}, text: "${checkbotText}"`
      : `${checkbotInstruction}: "${checkbotText}"`;

    const chatCompletionRes: IChatCompletionRes = await fetchAIChatCompletion(
      prompt
    );

    if (chatCompletionRes?.id) {
      setIsLoading(false);

      const chatCompletionContent =
        chatCompletionRes?.choices[0]?.message?.content;
      dispatch({
        type: "SET",
        name: "checkbotCompletion",
        value: chatCompletionContent,
      });

      const { removedDiff, addedDiff } = createRemovedAndAddedDiff(
        checkbotText,
        chatCompletionContent
      );
      dispatch({
        type: "SET",
        name: "checkbotCompletionAdded",
        value: addedDiff,
      });
      dispatch({
        type: "SET",
        name: "checkbotCompletionRemoved",
        value: removedDiff,
      });

      const fetchUserPromptsPayload = {
        instruction: checkbotInstruction,
        prompt_token: chatCompletionRes.usage.prompt_tokens,
        completion_token: chatCompletionRes.usage.completion_tokens,
        prompt_text: checkbotText,
        completion_text: chatCompletionContent,
      };

      saveCheckbotHistory(checkbotStates, chatCompletionContent);
      if (userHasOngoingPlan.isSubscription) {
        await fetchUserPrompts(user, fetchUserPromptsPayload);
      } else {
        await fetchUserPremiumPrompts(user, fetchUserPromptsPayload);
      }

      return;
    }

    toast.error("Terjadi kesalahan, silakan coba lagi");
    setIsLoading(false);
    return;
  };
  return (
    <div className="w-1/2 absolute right-1 bottom-3">
      <Button
        type="submit"
        disabled={isLoading}
        wrapperClassName="bg-blue-900 text-white rounded-md font-semibold text-center lg:w-1/2 ml-auto"
        buttonClassName="w-full h-full p-2"
        onClick={handleSubmit}
      >
        {isLoading ? (
          <div className="flex flex-row items-center justify-center">
            <span className="mr-2">Memproses</span>
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Check"
        )}
      </Button>
    </div>
  );
};

export default CheckbotSubmitBtn;
