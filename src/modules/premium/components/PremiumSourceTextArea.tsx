import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "@/common/components/Button";
import { useDesktopScreen } from "../../../common/hooks/useDesktopScreen";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const PremiumSourceTextArea = () => {
  const isDesktop = useDesktopScreen();
  const [textValue, setTextValue] = useState("Put your text here");

  const handleClearClick = () => {
    setTextValue("");
    sendFirebaseEvent("clear_source_text", {});
  };

  return (
    <div className="w-full border rounded-md bg-black p-2 mb-2 relative">
      <Button
        type="button"
        id="clear_text_btn"
        ariaLabel="clear_text_btn"
        wrapperClassName="absolute top-1 right-1 bg-black border-l border-b flex items-center p-1 rounded-md"
        onClick={handleClearClick}
      >
        <FaTimes className="text-3xl" />
      </Button>
      <label htmlFor="source_textarea">
        <textarea
          name="source_text"
          id="source_textarea"
          cols={30}
          rows={isDesktop ? 12 : 10}
          className="w-full rounded-md bg-black text-white focus:outline-none scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-full pr-2"
          value={textValue}
          onChange={(e: any) => setTextValue(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PremiumSourceTextArea;