import React from "react";
import Button from "@/common/components/Button";

const TranslateResult = () => {
  return (
    <div className="py-2">
      <textarea
        name="translate_result"
        id="translate_result_textarea"
        className="w-full rounded-md text-black"
        cols={30}
        rows={10}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button type="button" title="Copy" buttonClassName="w-full text-center p-2 bg-white text-black rounded-md" />
        <Button type="link" title="Go to Top" wrapperClassName="flex items-center justify-center w-full" buttonClassName="w-full text-center p-2 bg-white text-black rounded-md" />
      </div>
    </div>
  );
};

export default TranslateResult;
