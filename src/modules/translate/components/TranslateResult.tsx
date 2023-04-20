import React from "react";
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
    alert("Text Copied to Clipboard");
  };

  return (
    <div className="my-4 lg:mt-0 ">
      <textarea
        name="translate_result"
        id="translate_result_textarea"
        readOnly
        className="w-full rounded-md text-black p-2"
        cols={30}
        rows={isDesktop ? 12 : 10}
        value={
          translateVal ? translateVal : "Your translation will show up here"
        }
      />
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        <Button
          type="button"
          title="Copy"
          buttonClassName="w-full text-center p-2 bg-white text-black rounded-md hover:border hover:border-white hover:bg-black hover:text-white"
          onClick={copyText}
        />
        {!isDesktop && <Button
          type="link"
          href="#title"
          title="Go to Top"
          wrapperClassName="flex items-center justify-center w-full"
          buttonClassName="w-full text-center p-2 bg-white text-black rounded-md hover:border hover:border-white hover:bg-black hover:text-white"
        />}
      </div>
    </div>
  );
};

export default TranslateResult;
