import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import dynamic from "next/dynamic";
import Button from "@/common/components/Button";
import PremiumSourceTextArea from "@/common/components/PremiumSourceTextArea";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { PREMIUM_LANGUAGE_LIST } from "../lib/constant";
import { reactSelectDarkStyle } from "@/common/lib/reactSelectDarkStyle";
import { handlePremiumTranslate } from "../lib/handlePremiumTranslate";
import { handleGoogleTranslate } from "../lib/handleGoogleTranslate";
import { checkUserCurrentBalance } from "../lib/checkUserCurrentBalance";
import { reduceUserBalanceToken } from "../lib/reduceUserBalanceToken";

const InsufficientBalanceModal = dynamic(() => import("./InsufficientBalanceModal"));

interface ITranslateForm {
  dispatchLangTranslate: (val: string) => void;
  dispatchGoogleTranslate: (val: string) => void;
  dispatchTokenUsed: (val: number) => void;
}

const PremiumTranslateForm = (props: ITranslateForm) => {
  const { dispatchLangTranslate, dispatchGoogleTranslate, dispatchTokenUsed } = props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [languageLabel, setLanguageLabel] = useState("");

  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const hasBalance = checkUserCurrentBalance();
    if (!hasBalance) {
      setShowModal(true);
      return;
    }

    const languageCode = e.target.target_lang.value;
    const sourceText = e.target.source_text.value;
    const context = e.target.context.value;

    if (!languageCode) {
      toast.warning("Target Language Could Not be Empy");
      return;
    }

    if (!sourceText) {
      toast.warning("You haven't input your text!");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent("premium_translate", {
      name: "premium_translate",
      target_lang: languageLabel,
    });

    let prompt = `Translate ${sourceText}to ${languageLabel}`;
    if (sourceText) {
      prompt += `, (${context}) `;
    }

    const languageTranslate = await handlePremiumTranslate(prompt);
    const googleTranslate = await handleGoogleTranslate(languageCode, sourceText);

    if (languageTranslate.content && googleTranslate) {
      const totalToken = languageTranslate.prompt_tokens + languageTranslate.completion_tokens;

      dispatchTokenUsed(totalToken);
      dispatchLangTranslate(languageTranslate.content)
      dispatchGoogleTranslate(googleTranslate);

      reduceUserBalanceToken(totalToken);
      setIsLoading(false);
      if (!isDesktop) window.location.href = "#translate_result_textarea";
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {showModal && <InsufficientBalanceModal onCloseClick={() => setShowModal(false)} />}
      <label htmlFor="target_lang_select" className="w-full mb-4">
        <Select
          className="text-black mb-4"
          placeholder={
            isDesktop ? "Select Target Language" : "Select Language"
          }
          id="target_lang_select"
          name="target_lang"
          aria-label="target_lang_select"
          aria-labelledby="target_lang_select"
          options={PREMIUM_LANGUAGE_LIST}
          styles={reactSelectDarkStyle}
          onChange={(opt: any) => setLanguageLabel(opt?.label)}
        />
      </label>
      <div>
        <label htmlFor="context">
          <input
            id="context_input"
            name="context"
            className="w-full rounded-md p-2 mb-4 bg-black text-white"
            placeholder="Context (what the text is about) "
          />
        </label>
        <PremiumSourceTextArea />
        <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-full"
          buttonClassName="w-full bg-black text-white py-2 text-md rounded-md font-semibold text-center hover:bg-gray-500"
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
    </form>
  );
};

export default PremiumTranslateForm;
