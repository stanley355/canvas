import React, { useState } from "react";
import { FaAngleDoubleRight, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { decode } from "jsonwebtoken";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { handlePremiumPrompt } from "@/modules/premium/lib/handlePremiumPrompt";
import { fetchActiveSubscription } from "@/modules/profile/lib/fetchActiveSubscription";
import { isSubscriptionExpired } from "@/modules/profile/lib/isSubscriptionExpired";
import { checkUserCurrentBalance } from "@/modules/premium/lib/checkUserCurrentBalance";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";

interface IPromptForm {
  promptAndCompletionList: Array<any>;
  updateState: (name: string, value: any) => void;
}

const PromptForm = (props: IPromptForm) => {
  const { promptAndCompletionList, updateState } = props;
  const [promptValue, setPromptValue] = useState(
    "Translate 'Apa kabar' in German, English, and Japanese"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!promptValue) return;

    const token = Cookies.get("token");
    if (!token) {
      updateState("showLogin", true);
      sendFirebaseEvent("login_popup", {});
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
        updateState("showBalanceModal", true);
        setIsLoading(false);
        return;
      }
    }

    sendFirebaseEvent("languagegpt", { prompt });
    const { content, prompt_tokens, completion_tokens } =
      await handlePremiumPrompt(promptValue);
    if (content) {
      const saveUserPromptPayload = {
        instruction: "LanguageGPT",
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: promptValue,
        completion_text: content,
      };

      if (subscriptionExpired) {
        await saveUserPremiumPrompt(saveUserPromptPayload);
      } else {
        await saveUserPrompt(saveUserPromptPayload);
      }

      setIsLoading(false);
      setPromptValue("");
      updateState("promptAndCompletionList", [
        ...promptAndCompletionList,
        { role: "user", prompt: promptValue },
        { role: "system", prompt: content },
      ]);
      return;
    }

    toast.error("Server error, please try again");
    return;
  };

  return (
    <div className="absolute top-[83vh] lg:top-[85vh] left-0 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-black rounded  w-full  lg:w-2/3 lg:mx-auto border border-white"
      >
        <label htmlFor="prompt" className="p-2 w-5/6">
          <textarea
            name="userPrompt"
            id="prompt"
            value={promptValue}
            className="w-full rounded-md p-1 resize-none"
            onChange={(e: any) => setPromptValue(e.target.value)}
          />
        </label>

        <Button
          type="submit"
          wrapperClassName="w-1/6 h-full text-white text-2xl"
          buttonClassName="w-full h-full flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <FaAngleDoubleRight />
          )}
        </Button>
      </form>
    </div>
  );
};

export default PromptForm;
