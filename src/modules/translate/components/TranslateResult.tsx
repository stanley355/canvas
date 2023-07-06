import React from "react";
import { toast } from "react-toastify";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

interface ITranslateResult {
  translateVal: string;
}

const TranslateResult = (props: ITranslateResult) => {
  const { translateVal } = props;

  const isDesktop = useDesktopScreen();

  const copyText = () => {
    window.navigator.clipboard.writeText(translateVal);
    toast.info("Text Copied to Clipboard");
  };

  return (
    <div className="my-4 lg:mt-0 bg-white rounded pb-1">
      <label htmlFor="translate_result">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full text-black p-2 bg-transparent"
          cols={30}
          rows={isDesktop ? 14 : 10}
          onChange={() => {}}
          value={
            translateVal ? translateVal : "Your translation will show up here"
          }
        />
      </label>
        <Button
          type="button"
          title="Copy"
          wrapperClassName="w-1/3 ml-auto mr-1 mt-2 text-center p-2 bg-blue-900 text-white rounded-md font-semibold"
          buttonClassName="w-full"
          onClick={copyText}
        />
    </div>
  );
};

export default TranslateResult;
