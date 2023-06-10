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
    <div className="my-4 lg:mt-0">
      <div className="bg-black w-fit p-2 rounded mb-2">LanguageAI Premium</div>
      <label htmlFor="translate_result">
        <textarea
          name="translate_result"
          id="translate_result_textarea"
          className="w-full rounded-md bg-black text-white p-2 border"
          onChange={() => {}} //remove warning
          cols={30}
          rows={isDesktop ? 15 : 10}
          value={translateVal ? translateVal : "Your translation will show up here"}
        />
      </label>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        <Button
          type="button"
          title="Copy"
          buttonClassName="w-full text-center p-2 bg-black text-white rounded-md hover:bg-gray-500"
          onClick={copyText}
        />
        {!isDesktop && (
          <Button
            type="link"
            href="#title"
            title="Go to Top"
            wrapperClassName="flex items-center justify-center w-full"
            buttonClassName="w-full text-center p-2 bg-black text-white rounded-md hover:bg-gray-500"
          />
        )}
      </div>
    </div>
  );
};

export default PremiumTranslateResult;
