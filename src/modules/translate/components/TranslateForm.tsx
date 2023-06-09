import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import classNames from "classnames";

import Button from "@/common/components/Button";
import SourceTextArea from "../../../common/components/SourceTextArea";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { hasFreeTrial } from "@/common/lib/hasFreeTrial";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";
import { handlePrompt } from "@/common/lib/handlePrompt";
import { LANGUAGE_LIST } from "../lib/constant";
import { saveHistory } from "@/common/lib/saveHistory";

export interface ITranslateForm {
  originalText: string;
  imageText: string;
  onReuploadClick: () => void;
  dispatchLoginForm: () => void;
  dispatchTranslateVal: (val: string) => void;
}

const TranslateForm = (props: ITranslateForm) => {
  const {
    originalText,
    imageText,
    onReuploadClick,
    dispatchLoginForm,
    dispatchTranslateVal,
  } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const freeTrial = hasFreeTrial();
    if (!freeTrial) {
      dispatchLoginForm();
      sendFirebaseEvent("login_popup", {});
      return;
    }

    const target = e.target as any;
    const targetLang = target.target_lang.value;
    const sourceText = target.source_text.value;
    const contextText = target.context_text.value;

    if (!targetLang) {
      toast.warning("Target Language Could Not be Empty");
      return "";
    }

    if (!sourceText) {
      toast.warning("You haven't input your text!");
      return "";
    }

    sendFirebaseEvent("translate", {
      name: "translate",
      target_lange: targetLang,
    });

    setIsLoading(true);
    const prompt = `Translate "${sourceText}" to ${targetLang}. ${
      contextText ?? ""
    }`;
    const { content, prompt_tokens, completion_tokens } = await handlePrompt(
      prompt
    );

    if (content) {
      dispatchTranslateVal(content);
      setIsLoading(false);

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };
      await saveUserPrompt(saveUserPromptPayload);

      const historyPayload = {
        time: new Date(),
        instruction: `Translate to ${targetLang}`,
        originalText: sourceText,
        completionText: content,
        type: "translate",
      };
      await saveHistory(historyPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <label htmlFor="target_lang_select" className="w-full">
        <Select
          className="text-black"
          placeholder="Select Target Language"
          id="target_lang_select"
          name="target_lang"
          aria-label="target_lang_select"
          aria-labelledby="target_lang_select"
          options={LANGUAGE_LIST}
        />
      </label>
      <input
        name="context_text"
        id="context_text_textarea"
        className="w-full border rounded-md bg-transparent p-2 mt-3 text-black bg-white"
        placeholder="Optional: Context (xyz refers to...) "
      />
      <div className="mt-3 bg-white rounded">
        <SourceTextArea sourceText={imageText || originalText} />
        <div
          className={classNames(
            "px-1 pb-1 flex items-center",
            imageText ? "justify-between" : "justify-end"
          )}
        >
          {imageText && (
            <Button
              type="button"
              title="Re-upload"
              wrapperClassName="w-1/3 lg:w-1/5 p-1 lg:p-2 rounded bg-blue-900 text-white font-semibold"
              buttonClassName="w-full"
              onClick={onReuploadClick}
            />
          )}
          <Button
            type="submit"
            disabled={isLoading}
            wrapperClassName="w-1/3 bg-blue-900 text-white p-2 ml-auto text-md rounded-md font-semibold text-center"
            buttonClassName="w-full "
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
    </form>
  );
};

export default TranslateForm;
