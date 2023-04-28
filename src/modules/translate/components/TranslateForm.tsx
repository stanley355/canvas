import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner, FaPlay } from "react-icons/fa";
import axios from "axios";
import Button from "@/common/components/Button";
import SourceTextArea from "./SourceTextArea";
import { reactSelectDarkStyle } from "@/common/lib/reactSelect";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
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

    // TODO: Change this to fetch from next api on live hosting
    const URL = `${process.env.NEXT_PUBLIC_OPENAI_URL}v1/chat/completions`;
    const axiosConfig = {
      method: "POST",
      url: URL,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: baseMsg }],
      },
    };

    try {
      const { data } = await axios(axiosConfig);
      if (data && data.choices.length > 0) {
        const content = data.choices[0].message.content;
        dispatchTranslateVal(content);
      }
    } catch (err: any) {
      toast.error("Something went wrong, please try again");
    }

    // TODO: Activate this on live hosting
    // const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
    // const { data } = await axios.post(URL, reqData);
    // if (data && data.choices.length > 0) {
    //   const content = data.choices[0].message.content;
    //   dispatchTranslateVal(content);
    //   if (!isDesktop) window.location.href = "#translate_result_textarea";
    // } else {
    //   alert("Something went wrong, please try again!");
    // }

    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-row items-center justify-center w-full mb-4 lg:gap-2 lg:pt-0">
        <label htmlFor="ori_lang_select" className="w-5/12">
          <Select
            className="text-black"
            placeholder={isDesktop ? "Select Source Language" : "Select Lang"}
            id="ori_lang_select"
            name="ori_lang"
            aria-label="ori_lang_select"
            aria-labelledby="ori_lang_select"
            options={LANGUAGE_LIST}
            styles={reactSelectDarkStyle}
          />
        </label>
        <FaPlay className="w-2/12 text-xl" />
        <label htmlFor="target_lang_select" className="w-5/12">
          <Select
            className="text-black"
            placeholder={isDesktop ? "Select Target Language" : "Select Lang"}
            id="target_lang_select"
            name="target_lang"
            aria-label="target_lang_select"
            aria-labelledby="target_lang_select"
            options={LANGUAGE_LIST}
            styles={reactSelectDarkStyle}
          />
        </label>
      </div>
      <div>
        <input
          name="context_text"
          id="context_text_textarea"
          className="w-full border rounded-md bg-transparent p-2 mb-4"
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
