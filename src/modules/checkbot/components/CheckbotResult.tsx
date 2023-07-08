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
    <div className="bg-white border border-gray-500 rounded h-fit">
      <label htmlFor="checkbot_result">
        <textarea
          name="checkbot_result"
          id="checkbot_result_textarea"
          className="w-full text-black bg-transparent p-2"
          cols={30}
          rows={!checkbotVal ? 12 : 10}
          onChange={() => { }}
          value={checkbotVal ? checkbotVal : "Your result will show up here"}
        />
      </label>
      <div className="flex justify-between lg:justify-end p-2">
        {!isDesktop && <Button
          type="link"
          href="#top"
          title="Go To Top"
          wrapperClassName="w-1/3 text-center p-2 bg-blue-900 text-white font-semibold rounded-md"
          buttonClassName="w-full"
        />}
        <Button
          type="button"
          title="Copy"
          wrapperClassName="w-1/3 text-center p-2 bg-blue-900 text-white font-semibold rounded-md"
          buttonClassName="w-full"
          onClick={copyText}
        />
      </div>
    </div>
  );
};

export default CheckboxResult;
