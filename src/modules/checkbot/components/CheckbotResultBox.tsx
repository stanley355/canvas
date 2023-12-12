import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/lib/hooks/useDesktopScreen";
import { useCheckbot } from "../lib/useCheckbot";

const CheckbotResultBox = () => {
  const isDesktop = useDesktopScreen();
  const { checkbotStates } = useCheckbot();
  const { checkbotCompletion } = checkbotStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(checkbotCompletion);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="w-full relative">
      <label htmlFor="checkbot_result_textarea">
        <textarea
          name="checkbot_result"
          id="checkbot_result_textarea"
          className="w-full text-black p-2 bg-white border border-black rounded-md focus:outline-none"
          cols={30}
          rows={10}
          placeholder="Teks Anda akan muncul di sini"
          onChange={() => {}}
          value={checkbotCompletion}
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

export default CheckbotResultBox;
