import React, { useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner, FaPlay } from "react-icons/fa";
import axios from "axios";
import { LANGUAGE_LIST } from "../constant";
import Button from "@/common/components/Button";
import SourceTextArea from "../../../common/components/SourceTextArea";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { hasFreeTrial } from "@/common/lib/hasFreeTrial";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";
import { showPremiumOffer } from "@/common/lib/showPremiumOffer";

const PremiumOfferModal = dynamic(() => import("../../../common/components/PremiumTranslationModal"));

interface ITranslateForm {
  dispatchLoginForm: () => void;
  dispatchTranslateVal: (val: string) => void;
}

const TranslateForm = (props: ITranslateForm) => {
  const { dispatchLoginForm, dispatchTranslateVal } = props;

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const freeTrial = hasFreeTrial();
    if (!freeTrial) {
      dispatchLoginForm();
      sendFirebaseEvent("login_popup", {});
      return;
    }

    const oriLang = e.target.ori_lang.value;
    const targetLang = e.target.target_lang.value;
    const sourceText = e.target.source_text.value;
    const contextText = e.target.context_text.value;

    if (!targetLang) {
      toast.warning("Target Language Could Not be Empy");
      return "";
    }

    if (!sourceText) {
      toast.warning("You haven't input your text!");
      return "";
    }

    sendFirebaseEvent("translate", {
      name: "translate",
      ori_lang: oriLang,
      target_lange: targetLang,
    });

    setIsLoading(true);

    let baseMsg = `Translate this to ${targetLang}`;
    if (oriLang) {
      baseMsg = `Translate this text from ${oriLang} to ${targetLang}`;
    }
    if (contextText) {
      baseMsg + " " + `(${contextText}) `;
    }
    baseMsg = `${baseMsg}: "${sourceText}"`;

    const reqData = {
      content: baseMsg,
    };

    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
    const { data } = await axios.post(URL, reqData);

    if (data?.choices?.length > 0) {
      setIsLoading(false);

      const content = data.choices[0].message.content;
      const saveUserPromptPayload = {
        prompt_token: data?.usage?.prompt_tokens,
        completion_token: data?.usage?.completion_tokens,
        prompt_text: baseMsg,
        completion_text: content,
      };

      await saveUserPrompt(saveUserPromptPayload);
      dispatchTranslateVal(content);

      if (!isDesktop) window.location.href = "#translate_result_textarea";

      const showOffer = showPremiumOffer();
      if (showOffer) {
        setShowModal(true);
        sendFirebaseEvent("premium_offer", {});
      };
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {showModal && <PremiumOfferModal onCloseClick={() => setShowModal(false)} />}
      <div className="flex flex-row items-center justify-center w-full mb-4 lg:gap-2 lg:pt-0">
        <label htmlFor="ori_lang_select" className="w-5/12">
          <Select
            className="text-black"
            placeholder={
              isDesktop ? "Select Source Language" : "Select Language"
            }
            id="ori_lang_select"
            name="ori_lang"
            aria-label="ori_lang_select"
            aria-labelledby="ori_lang_select"
            options={LANGUAGE_LIST}
          />
        </label>
        <FaPlay className="w-2/12 text-xl" />
        <label htmlFor="target_lang_select" className="w-5/12">
          <Select
            className="text-black"
            placeholder={
              isDesktop ? "Select Target Language" : "Select Language"
            }
            id="target_lang_select"
            name="target_lang"
            aria-label="target_lang_select"
            aria-labelledby="target_lang_select"
            options={LANGUAGE_LIST}
          />
        </label>
      </div>
      <div>
        <input
          name="context_text"
          id="context_text_textarea"
          className="w-full border rounded-md bg-transparent p-2 mb-4 text-black bg-white"
          placeholder="Optional: Context (xyz refers to...) "
        />
        <SourceTextArea />
        <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-full lg:w-2/3 lg:mx-auto"
          buttonClassName="w-full bg-white text-black py-2 text-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
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

export default TranslateForm;
