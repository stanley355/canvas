import React from "react";
import Button from "@/common/components/Button";
import { FaX } from "react-icons/fa6";
import { useTranslate } from "../lib/useTranslate";
import TranslateSubmitBtn from "./TranslateSubmitBtn";
import TranslateClearBtn from "./TranslateClearBtn";

const TranslateTextInput = () => {
  const { translateStates, dispatch } = useTranslate();
  const { translateText } = translateStates;

  return (
    <div className="w-full relative">
      <TranslateClearBtn />
      <label htmlFor="translate_text">
        <textarea
          name="translate_text"
          id="translate_textarea"
          cols={30}
          rows={10}
          className="w-full h-full bg-white resize-none p-2 rounded border border-black text-black focus:outline-none "
          placeholder="Put your text here"
          value={translateText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            dispatch({
              type: "SET",
              name: "translateText",
              value: e.target.value,
            })
          }
        />
      </label>
      <TranslateSubmitBtn />
    </div>
  );
};

export default TranslateTextInput;
