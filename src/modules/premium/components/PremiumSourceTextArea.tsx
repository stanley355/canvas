import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "@/common/components/Button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface IPremiumSourceTextArea {
  sourceText?: string;
}

const PremiumSourceTextArea = (props: IPremiumSourceTextArea) => {
  const { sourceText } = props;
  const [textValue, setTextValue] = useState(
    sourceText ? sourceText : "Put your text here"
  );

  const handleClearClick = () => {
    setTextValue("");
    sendFirebaseEvent("clear_source_text", {});
  };

  return (
    <div className="w-full p-2 pb-0 relative">
      <Button
        type="button"
        id="clear_text_btn"
        ariaLabel="clear_text_btn"
        wrapperClassName="bg-blue-900 text-white absolute top-1 right-1 bg-black border-l border-b flex items-center p-1 rounded-md"
        onClick={handleClearClick}
      >
        <FaTimes className="text-3xl" />
      </Button>
      <label htmlFor="source_text">
        <textarea
          name="source_text"
          id="source_textarea"
          cols={30}
          rows={10}
          className="w-full bg-transparent text-black focus:outline-none scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-full pr-2"
          value={textValue}
          onChange={(e: any) => setTextValue(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PremiumSourceTextArea;
