import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "@/common/components/Button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const SourceTextArea = () => {
  const [textValue, setTextValue] = useState("");

  const handleClearClick = () => {
    setTextValue("");
    sendFirebaseEvent("clear_source_text", {});
  };

  return (
    <div className="w-full border rounded-md bg-transparent p-2 mb-2 relative">
      <Button
        type="button"
        wrapperClassName="absolute top-0 right-0 bg-black border-l border-b flex items-center p-1"
        onClick={handleClearClick}
      >
        <FaTimes className="text-3xl" />
      </Button>
      <textarea
        name="source_text"
        id="source_textarea"
        cols={30}
        rows={10}
        className="w-full rounded-md bg-transparent focus:outline-none scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-full pr-2"
        value={textValue}
        onChange={(e:any)=> setTextValue(e.target.value)}
      />
    </div>
  );
};

export default SourceTextArea;
