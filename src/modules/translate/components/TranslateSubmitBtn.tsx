import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import { decode } from "jsonwebtoken";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import { useTranslate } from "../lib/useTranslate";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { checkUserHasOngoingPlan } from "@/common/lib/checkUserHasOngoingPlan";
import { fetchAIChatCompletion } from "@/common/lib/api/ai/fetchAIChatCompletion";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";
import { saveTranslateHistory } from "../lib/saveTranslateHistory";
import { fetchUserPrompts } from "@/common/lib/api/prompts/fetchUserPrompts";
import { fetchUserPremiumPrompts } from "@/common/lib/api/prompts/fetchUserPremiumPrompts";

const TranslateSubmitBtn = () => {
  const { translateStates, dispatch } = useTranslate();
  const { translateLanguage, translateContext, translateText } =
    translateStates;
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

    if (!translateLanguage?.value) {
      toast.warning("Bahasa tujuan tidak boleh kosong");
      return;
    }

    if (!translateText) {
      toast.warning("Harap masukkan teks Anda");
      return;
    }

    setIsLoading(true);
    const user: any = decode(token);
    const userHasOngoingPlan = await checkUserHasOngoingPlan(user);

    if (userHasOngoingPlan.showPaylaterOffer) {
      dispatch({ type: "SET", name: "showPaylaterOffer", value: true });
      sendFirebaseEvent("paylater_popup");
      setIsLoading(false);
      return;
    }

    if (!userHasOngoingPlan.hasOngoingPlan) {
      dispatch({ type: "SET", name: "showNoPlansModal", value: true });
      setIsLoading(false);
      return;
    }

    sendFirebaseEvent("translate");

    const prompt = `Translate "${translateText}" to ${
      translateLanguage?.value
    }. ${translateContext ?? ""}.`;
    const chatCompletionRes: IChatCompletionRes = await fetchAIChatCompletion(
      prompt
    );

    if (chatCompletionRes?.id) {
      setIsLoading(false);

      const chatCompletionContent =
        chatCompletionRes?.choices[0]?.message?.content;
      dispatch({
        type: "SET",
        name: "translateCompletion",
        value: chatCompletionContent,
      });

      const fetchUserPromptsPayload = {
        instruction: `Translate to ${translateLanguage.value}`,
        prompt_token: chatCompletionRes.usage.prompt_tokens,
        completion_token: chatCompletionRes.usage.completion_tokens,
        prompt_text: translateText,
        completion_text: chatCompletionContent,
      };

      saveTranslateHistory(translateStates, chatCompletionContent);
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
          "Translate"
        )}
      </Button>
    </div>
  );
};

export default TranslateSubmitBtn;
