import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useTranslate } from "../lib/useTranslate";

const TranslateResultBox = () => {
  const { translateStates } = useTranslate();
  const { translateCompletion } = translateStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(translateCompletion);
    toast.info("Teks ter-copy ke Clipboard");
  };

  return (
    <div className="w-full relative">
      <label htmlFor="translate_result_textarea">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full text-black p-2 bg-white border border-black rounded-md focus:outline-none"
          cols={30}
          rows={14}
          placeholder="Terjemahan Anda akan muncul di sini"
          onChange={() => {}}
          value={translateCompletion}
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="w-1/2 lg:w-1/4 absolute bottom-3 right-1 text-center p-2 bg-blue-900 text-white rounded-md font-semibold"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default TranslateResultBox;
