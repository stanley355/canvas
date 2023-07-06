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
    <div className="relative">
      <label htmlFor="translate_result">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full rounded-md bg-black text-white p-2 border"
          onChange={() => { }} //remove warning
          cols={30}
          rows={isDesktop ? 16: 10}
          value={
            translateVal ? translateVal : "Your translation will show up here"
          }
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="absolute right-2 bottom-4 lg:bottom-5 w-1/3 p-1 lg:p-2 rounded bg-white text-black font-semibold"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default PremiumTranslateResult;
