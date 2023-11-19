import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { useTranslate } from "../lib/useTranslate";

const TranslateResultBox = () => {
  const { translateStates } = useTranslate();
  const { translateCompletion } = translateStates;

  const isDesktop = useDesktopScreen();

  const copyText = () => {
    window.navigator.clipboard.writeText(translateCompletion);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="my-4 lg:mt-0 bg-white border border-gray-500 rounded pb-1">
      <label htmlFor="translate_result_textarea">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full text-black p-2 pb-2 bg-transparent"
          cols={30}
          rows={isDesktop ? 12 : 10}
          placeholder="Your translation will show up here"
          onChange={() => {}}
          value={translateCompletion}
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="w-1/3 ml-auto mr-1 mt-1 text-center p-2 bg-blue-900 text-white rounded-md font-semibold"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default TranslateResultBox;
