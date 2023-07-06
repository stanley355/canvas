import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaCloudUploadAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { ITranslateForm } from "./TranslateForm";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { PREMIUM_LANGUAGE_LIST } from "../lib/constant";
import { reactSelectDarkStyle } from "@/common/lib/reactSelectDarkStyle";
import { handlePremiumPrompt } from "../lib/handlePremiumPrompt";
import { checkUserCurrentBalance } from "../lib/checkUserCurrentBalance";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";

const InsufficientBalanceModal = dynamic(
  () => import("./InsufficientBalanceModal")
);

const PremiumImageTranslateForm = (props: ITranslateForm) => {
  const { dispatchLangTranslate, dispatchTokenUsed, dispatchLoginForm } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [languageLabel, setLanguageLabel] = useState("");

  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      dispatchLoginForm();
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
    const hasBalance = await checkUserCurrentBalance();
    if (!hasBalance) {
      setShowModal(true);
      setIsLoading(false);
      return;
    }

    sendFirebaseEvent("premium_translate", {
      name: "premium_translate",
      target_lang: languageLabel,
    });

    const prompt = `Translate ${sourceText} to ${languageLabel} ${context ?? ""}`;
    const { content, prompt_tokens, completion_tokens } = await handlePremiumPrompt(prompt);

    if (content) {
      if (!isDesktop) window.location.href = "#translate_result_textarea";
      const totalToken = prompt_tokens + completion_tokens;
      dispatchTokenUsed(totalToken);
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

  const ImageUploader = () => {
    return (
      <div className="bg-black rounded ">
        <label htmlFor="image_input" className="text-white cursor-pointer w-full h-60 lg:h-64 flex flex-col items-center justify-center">
          <input type="file" name="image_input" id="image_input" hidden size={60} accept="image/png, image/jpeg, image/jpg" />
          <FaCloudUploadAlt className="text-5xl" />
          <div className="font-semibold text-xl">Upload your Image</div>
          <div className="font-semibold text-lg">(.png, .jpeg, .jpg)</div>
        </label>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 lg:mb-0 relative">
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
            className="w-full rounded-md p-2 mb-2 bg-black text-white"
            placeholder="Context (what the text is about) "
          />
        </label>
        <ImageUploader />
        {/* <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="absolute right-2 bottom-2 lg:bottom-4 w-1/3 p-2 rounded bg-white text-black font-semibold"
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
        </Button> */}
      </div>
    </form>
  );
};

export default PremiumImageTranslateForm;
