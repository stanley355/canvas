import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import dynamic from "next/dynamic";
import classNames from "classnames";
import Cookies from "js-cookie";
import Button from "@/common/components/Button";
import PremiumSourceTextArea from "./PremiumSourceTextArea";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { reactSelectDarkStyle } from "@/common/lib/reactSelectDarkStyle";
import { handlePremiumPrompt } from "../lib/handlePremiumPrompt";
import { checkUserCurrentBalance } from "../lib/checkUserCurrentBalance";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";
import { LANGUAGE_LIST } from "@/modules/translate/constant";

const InsufficientBalanceModal = dynamic(
  () => import("./InsufficientBalanceModal")
);

export interface ITranslateForm {
  imageText: string;
  onReuploadClick: () => void;
  dispatchLoginForm: () => void;
  dispatchLangTranslate: (val: string) => void;
}

const PremiumTranslateForm = (props: ITranslateForm) => {
  const { imageText, onReuploadClick, dispatchLangTranslate, dispatchLoginForm } = props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      dispatchLoginForm();
      return;
    }

    const language = e.target.target_lang.value;
    const sourceText = e.target.source_text.value;
    const context = e.target.context.value;

    if (!language) {
      toast.warning("Target Language Could Not be Empy");
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

    const prompt = `Translate ${sourceText} to ${language} ${context ?? ""}`;
    const { content, prompt_tokens, completion_tokens } = await handlePremiumPrompt(prompt);

    if (content) {
      dispatchLangTranslate(content);
      setIsLoading(false);

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };
      await saveUserPremiumPrompt(saveUserPromptPayload);

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
          styles={reactSelectDarkStyle}
        />
      </label>
      <div>
        <label htmlFor="context">
          <input
            id="context_input"
            name="context"
            className="w-full rounded-md p-2 mb-2 bg-black text-white"
            placeholder="Context (what the text is about) "
          />
        </label>
        <div className="bg-black rounded">
          <PremiumSourceTextArea sourceText={imageText} />
          <div className={classNames("px-2 pb-2 flex items-center", imageText ? "justify-between" : "justify-end")}>
            {imageText && <Button
              type="button"
              title="Re-upload"
              wrapperClassName="w-1/3 lg:w-1/5 p-1 lg:p-2 rounded bg-white text-black font-semibold"
              buttonClassName="w-full"
              onClick={onReuploadClick}
            />}

            <Button
              type="submit"
              disabled={isLoading}
              wrapperClassName="w-1/3 lg:w-1/5 p-1 lg:p-2 rounded bg-white text-black font-semibold"
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
