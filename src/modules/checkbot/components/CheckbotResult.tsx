import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface ICheckbotResult {
  checkbotVal: string;
}

const CheckboxResult = (props: ICheckbotResult) => {
  const { checkbotVal } = props;

  const isDesktop = useDesktopScreen();

  const copyText = () => {
    window.navigator.clipboard.writeText(checkbotVal);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="bg-white rounded pb-1 h-fit">
      <label htmlFor="checkbot_result">
        <textarea
          name="checkbot_result"
          id="checkbot_result_textarea"
          className="w-full text-black bg-transparent p-2"
          cols={30}
          rows={isDesktop ? 12 : 10}
          onChange={() => {}}
          value={checkbotVal ? checkbotVal : "Your result will show up here"}
        />
      </label>
        <Button
          type="button"
          title="Copy"
          wrapperClassName="w-1/3 ml-auto mr-1 text-center p-2 bg-blue-900 text-white font-semibold rounded-md"
          buttonClassName="w-full"
          onClick={copyText}
        />
    </div>
  );
};

export default CheckboxResult;
