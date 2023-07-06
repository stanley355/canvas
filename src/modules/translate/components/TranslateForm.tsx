import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { LANGUAGE_LIST } from "../constant";
import Button from "@/common/components/Button";
import SourceTextArea from "../../../common/components/SourceTextArea";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { hasFreeTrial } from "@/common/lib/hasFreeTrial";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";
import { handlePrompt } from "@/common/lib/handlePrompt";

interface ITranslateForm {
  dispatchLoginForm: () => void;
  dispatchTranslateVal: (val: string) => void;
}

const TranslateForm = (props: ITranslateForm) => {
  const { dispatchLoginForm, dispatchTranslateVal } = props;

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
      setIsLoading(false);
      dispatchTranslateVal(content);
      if (!isDesktop) window.location.href = "#translate_result_textarea";

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };

      await saveUserPrompt(saveUserPromptPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
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
      <div className="mt-4">
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
          wrapperClassName="w-full lg:mx-auto"
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
