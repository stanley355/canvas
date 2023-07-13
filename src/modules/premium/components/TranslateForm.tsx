import React, { useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import classNames from "classnames";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import PremiumSourceTextArea from "./PremiumSourceTextArea";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { handlePremiumPrompt } from "../lib/handlePremiumPrompt";
import { checkUserCurrentBalance } from "../lib/checkUserCurrentBalance";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";
import { LANGUAGE_LIST } from "@/modules/translate/lib/constant";
import { saveHistory } from "@/common/lib/saveHistory";
import { ITranslateForm } from "@/modules/translate/components/TranslateForm";

const InsufficientBalanceModal = dynamic(
  () => import("./InsufficientBalanceModal")
);

const PremiumTranslateForm = (props: ITranslateForm) => {
  const {
    originalText,
    imageText,
    onReuploadClick,
    dispatchLoginForm,
    dispatchTranslateVal,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      dispatchLoginForm();
      sendFirebaseEvent("login_popup", {});
      return;
    }

    const target = e.target as any;
    const language = target.target_lang.value;
    const sourceText = target.source_text.value;
    const context = target.context.value;

    if (!language) {
      toast.warning("Target Language Could Not be Empty");
      return;
    }

    if (!sourceText) {
      toast.warning("You haven't input your text!");
      return;
    }

    setIsLoading(true);
    const hasBalance = await checkUserCurrentBalance();
    if (!hasBalance) {
      setShowModal(true);
      setIsLoading(false);
      return;
    }

    sendFirebaseEvent("premium_translate", {
      name: "premium_translate",
      target_lang: language,
    });

    const prompt = `Translate "${sourceText}" to ${language}. ${context ?? ""}`;
    const { content, prompt_tokens, completion_tokens } =
      await handlePremiumPrompt(prompt);

    if (content) {
      dispatchTranslateVal(content);
      setIsLoading(false);

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };
      await saveUserPremiumPrompt(saveUserPromptPayload);

      const historyPayload = {
        time: new Date(),
        instruction: `Translate to ${language}`,
        originalText: sourceText,
        completionText: content,
        type: "translate",
      };
      saveHistory(historyPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 lg:mb-0">
      {showModal && (
        <InsufficientBalanceModal onCloseClick={() => setShowModal(false)} />
      )}
      <label htmlFor="target_lang_select" className="w-full mb-4">
        <Select
          className="text-black mb-2"
          placeholder="Select Target Language"
          id="target_lang_select"
          name="target_lang"
          aria-label="target_lang_select"
          aria-labelledby="target_lang_select"
          options={LANGUAGE_LIST}
          styles={{
            control: (defaults: any) => ({
              ...defaults,
              border: "1px solid gray",
            }),
            placeholder: (defaults: any) => ({
              ...defaults,
              color: "black",
            }),
          }}
        />
      </label>
      <div>
        <label htmlFor="context">
          <input
            id="context_input"
            name="context"
            className="w-full rounded p-2 mb-2 bg-transparent text-black border border-gray-500"
            placeholder="Context (what the text is about) "
          />
        </label>
        <div className="rounded border border-gray-500">
          <PremiumSourceTextArea sourceText={imageText || originalText} />
          <div
            className={classNames(
              "px-2 pb-2 flex items-center",
              imageText ? "justify-between" : "justify-end"
            )}
          >
            {imageText && (
              <Button
                type="button"
                title="Re-upload"
                wrapperClassName="w-1/3 bg-blue-900 text-white py-2 rounded-md font-semibold text-center"
                buttonClassName="w-full"
                onClick={onReuploadClick}
              />
            )}
            <Button
              type="submit"
              disabled={isLoading}
              wrapperClassName="w-1/3 bg-blue-900 text-white py-2 rounded-md font-semibold text-center"
              buttonClassName="w-full"
            >
              {isLoading ? (
                <div className="flex flex row items-center justify-center">
                  <span className="mr-2">Translating</span>
                  <FaSpinner className="animate-spin" />
                </div>
              ) : (
                "Translate"
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PremiumTranslateForm;
