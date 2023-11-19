import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import classNames from "classnames";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import Button from "@/common/components/Button";
import { useTranslate } from "../lib/useTranslate";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchActiveSubscription } from "@/modules/profile/lib/fetchActiveSubscription";
import { isSubscriptionExpired } from "@/modules/profile/lib/isSubscriptionExpired";
import { checkUserCurrentBalance } from "@/modules/premium/lib/checkUserCurrentBalance";
import { handlePremiumPrompt } from "@/modules/premium/lib/handlePremiumPrompt";
import { saveHistory } from "@/common/lib/saveHistory";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";

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
      sendFirebaseEvent("login_popup", {});
      return;
    }

    if (!translateLanguage?.value) {
      toast.warning("Target Language could not be Empty");
      return;
    }

    if (!translateText) {
      toast.warning("You haven't input your text!");
      return;
    }

    setIsLoading(true);
    const user: any = decode(token);
    const subscription = await fetchActiveSubscription(user.id);
    const subscriptionExpired = subscription?.id
      ? isSubscriptionExpired(subscription.end_at)
      : true;
    if (subscriptionExpired) {
      const hasBalance = await checkUserCurrentBalance();
      if (!hasBalance) {
        dispatch({ type: "SET", name: "showNoPlansModal", value: true });
        setIsLoading(false);
        return;
      }
    }

    sendFirebaseEvent("translate", {
      name: "translate",
      translate_language: translateLanguage?.value,
    });

    const prompt = `Translate "${translateText}" to ${
      translateLanguage?.value
    }. ${translateContext ?? ""}.`;
    const { content, prompt_tokens, completion_tokens } =
      await handlePremiumPrompt(prompt);

    if (content) {
      setIsLoading(false);
      dispatch({
        type: "SET",
        name: "translateCompletion",
        value: content,
      });

      const historyPayload = {
        time: new Date(),
        instruction: `Translate to ${translateLanguage}`,
        originalText: translateText,
        completionText: content,
        type: "translate",
      };
      saveHistory(historyPayload);

      const saveUserPromptPayload = {
        instruction: `Translate to ${translateLanguage}`,
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: translateText,
        completion_text: content,
      };
      if (subscriptionExpired) {
        await saveUserPremiumPrompt(saveUserPromptPayload); // reduce user balance
      } else {
        await saveUserPrompt(saveUserPromptPayload); //not reduce user balance
      }

      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };
  return (
    <div className="w-1/2 absolute right-1 bottom-3">
      <Button
        type="submit"
        disabled={isLoading}
        wrapperClassName="bg-blue-900 text-white rounded-md font-semibold text-center w-1/2 ml-auto"
        buttonClassName="w-full h-full p-2"
        onClick={handleSubmit}
      >
        {isLoading ? (
          <div className="flex flex-row items-center justify-center">
            <span className="mr-2">Please wait a moment</span>
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
