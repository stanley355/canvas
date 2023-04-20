import React from "react";
import Button from "@/common/components/Button";

interface ITranslateResult {
  translateVal: string;
}

const TranslateResult = (props: ITranslateResult) => {
  const { translateVal } = props;

  const copyText = () => {
    window.navigator.clipboard.writeText(translateVal);
    alert("Text Copied to Clipboard");
  };

  return (
    <div className="py-2">
      <textarea
        name="translate_result"
        id="translate_result_textarea"
        className="w-full rounded-md text-black p-2"
        cols={30}
        rows={10}
        value={
          translateVal ? translateVal : "Your translation will show up here"
        }
      />
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          title="Copy"
          buttonClassName="w-full text-center p-2 bg-white text-black rounded-md"
          onClick={copyText}
        />
        <Button
          type="link"
          href="#title"
          title="Go to Top"
          wrapperClassName="flex items-center justify-center w-full"
          buttonClassName="w-full text-center p-2 bg-white text-black rounded-md"
        />
      </div>
    </div>
  );
};

export default TranslateResult;
