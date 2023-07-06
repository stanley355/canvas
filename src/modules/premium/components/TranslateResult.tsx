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
    <div className="bg-black rounded pb-2">
      <label htmlFor="translate_result">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full rounded-md bg-transparent text-white p-2"
          onChange={() => { }} //remove warning
          cols={30}
          rows={isDesktop ? 13: 10}
          value={
            translateVal ? translateVal : "Your translation will show up here"
          }
        />
      </label>
      <Button
        type="button"
        title="Copy"
        wrapperClassName="ml-auto mr-2 mt-4 w-1/3 lg:w-1/5 p-1 lg:p-2 rounded bg-white text-black font-semibold"
        buttonClassName="w-full"
        onClick={copyText}
      />
    </div>
  );
};

export default PremiumTranslateResult;
