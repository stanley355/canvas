import React, { useState } from "react";
import Select from "react-select";
import { FaAngleDoubleRight, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import Button from "@/common/components/Button";
import { LANGUAGE_LIST } from "../constant";

interface ITranslateForm {
  dispatchTranslateVal: (val: string) => void;
}

const TranslateForm = (props: ITranslateForm) => {
  const { dispatchTranslateVal } = props;
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const oriLang = e.target.ori_lang.value;
    const targetLang = e.target.target_lang.value;
    const oriLangText = e.target.ori_lang_text.value;
    const contextText = e.target.context_text.value;

    if (!targetLang) {
      alert("Target Language could not be empty!");
      return "";
    }

    if (!oriLangText) {
      alert("Source Language Text could not be empty!");
      return "";
    }

    sendFirebaseEvent("Translate", {
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
    const reqData = {
      message: `${baseMsg}: "${oriLangText}"`,
    };

    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
    const { data } = await axios.post(URL, reqData);
    if (data && data.choices.length > 0) {
      const content = data.choices[0].message.content;
      dispatchTranslateVal(content);
      if (!isDesktop) window.location.href = "#translate_result_textarea";
    } else {
      alert("Something went wrong, please try again!");
    }

    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row items-center justify-center w-full py-2 lg:gap-2 lg:pt-0">
        <Select
          className="w-5/12 lg:w-1/2 text-black"
          placeholder={isDesktop ? "Select Source Language" : "Select Lang"}
          id="ori_lang_select"
          name="ori_lang"
          options={LANGUAGE_LIST}
        />
        <FaAngleDoubleRight className="w-2/12 lg:hidden" />
        <Select
          className="w-5/12 lg:w-1/2 text-black"
          placeholder={isDesktop ? "Select Target Language" : "Select Lang"}
          id="target_lang_select"
          name="target_lang"
          options={LANGUAGE_LIST}
        />
      </div>
      <div>
        <div className="lg:flex lg:flex-row lg:gap-2 lg:mb-2">
          <textarea
            name="ori_lang_text"
            id="ori_lang_textarea"
            cols={30}
            rows={10}
            className="w-full border rounded-md bg-transparent p-2 lg:w-3/4"
            placeholder="Copy your text here"
          />
          <textarea
            name="context_text"
            id="context_text_textarea"
            cols={30}
            rows={5}
            className="w-full border rounded-md bg-transparent p-2 lg:w-1/4"
            placeholder="Optional: Put your context here (e.g. the word xyz refers to...) "
          />
        </div>
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
