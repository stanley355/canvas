import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface ITranslateResult {
  translateVal: string;
}

const PremiumTranslateResult = (props: ITranslateResult) => {
  const { translateVal } = props;

  const isDesktop = useDesktopScreen();

  const copyText = () => {
    window.navigator.clipboard.writeText(translateVal);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="rounded text-black border border-gray-500">
      <label htmlFor="translate_result">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full bg-transparent p-2"
          onChange={() => { }} //remove warning
          cols={30}
          rows={isDesktop ? 14 : 10}
          value={
            translateVal ? translateVal : "Your translation will show up here"
          }
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="w-1/3 text-center m-1 ml-auto p-2 bg-blue-900 text-white font-semibold rounded-md"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default PremiumTranslateResult;
