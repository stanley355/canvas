import React, {useState} from "react";
import Select from "react-select";
import { FaAngleDoubleRight, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import Button from "@/common/components/Button";
import { LANGUAGE_LIST } from "../constant";

const TranslateForm = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [translateValue, setTranslateValue] = useState("");
  const isDesktop = useDesktopScreen();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const oriLang = e.target.ori_lang.value;
    const targetLang = e.target.target_lang.value;
    const oriLangText = e.target.ori_lang_text.value;

    if (!oriLang) {
      alert("Source Language could not be empty!");
      return "";
    }

    if (!targetLang) {
      alert("Target Language could not be empty!");
      return "";
    }

    if (!oriLangText) {
      alert("Source Language Text could not be empty!");
      return "";
    }

    setIsLoading(true);
    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/openai/chat-completion/`;
    const reqData = {
      message: `Translate this text from ${oriLang} to ${targetLang}: "${oriLangText}"`,
    };

    const { data } = await axios.post(URL, reqData);
    if (data && data.choices.length > 0) {
      setTranslateValue(data.choices[0].message.content);
    } else {
      alert("Something went wrong, please try again!");
    }

    setIsLoading(false);
    return "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="py-2 text-3xl">AI Translate</h1>
      <div className="flex flex-row items-center justify-center w-full py-2 lg:gap-2">
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
            className="w-full border rounded-md bg-transparent p-2"
            placeholder="..."
          />
          <textarea
            name="target_lang_text"
            id="target_lang_textarea"
            cols={30}
            rows={10}
            className="w-full border rounded-md bg-transparent p-2"
            value={translateValue}
            placeholder="..."
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-full lg:w-1/3 lg:mx-auto"
          buttonClassName="w-full bg-white text-black py-2 text-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
        >
          {isLoading ? (
            <div className="flex flex row items-center justify-center">
              <span className="mr-2">Loading</span>
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
};

export default TranslateForm;
