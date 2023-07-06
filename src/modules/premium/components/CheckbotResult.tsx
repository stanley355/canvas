import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface ITranslateResult {
  checkbotVal: string;
}

const PremiumCheckbotResult = (props: ITranslateResult) => {
  const { checkbotVal } = props;

  const isDesktop = useDesktopScreen();

  const copyText = () => {
    window.navigator.clipboard.writeText(checkbotVal);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="my-4 lg:my-0 bg-black pb-2 rounded">
      <label htmlFor="checkbot_result">
        <textarea
          name="checkbot_result"
          id="checkbot_result_textarea"
          className="w-full bg-transparent text-white p-2 "
          onChange={() => {}} //remove warning
          cols={30}
          rows={isDesktop ? 11 : 10}
          value={checkbotVal ? checkbotVal : "Your result will show up here"}
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="w-1/3 lg:w-1/5 ml-auto mr-2 mt-4 text-center p-2 bg-white text-black rounded-md"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default PremiumCheckbotResult;
