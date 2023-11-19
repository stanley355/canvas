import React from "react";
import Button from "@/common/components/Button";
import { FaX } from "react-icons/fa6";
import { useTranslate } from "../lib/useTranslate";

const TranslateTextInput = () => {
  const { translateStates, dispatch } = useTranslate();
  const { translateText } = translateStates;

  return (
    <div className="w-full relative">
      <Button
        type="button"
        id="clear_text_btn"
        ariaLabel="clear_text_btn"
        wrapperClassName="absolute top-1 right-1 bg-black border-l border-b flex items-center p-1 rounded-md"
        onClick={() => {
          dispatch({
            type: "SET",
            name: "translateText",
            value: "",
          });
        }}
      >
        <FaX className="text-2xl" />
      </Button>
      <label htmlFor="translate_text">
        <textarea
          name="translate_text"
          id="translate_textarea"
          cols={30}
          rows={10}
          className="w-full h-full bg-white resize-none p-2 rounded border border-black text-black focus:outline-none "
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
    </div>
  );
};

export default TranslateTextInput;
