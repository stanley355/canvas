import React from "react";
import { FaLanguage } from "react-icons/fa6";

const TranslateTypePlaceholder = () => {
  return (
    <div className="flex items-center gap-2 ">
      <FaLanguage className="text-xl" />
      <span>Text Translate</span>
    </div>
  );
};

export default TranslateTypePlaceholder;
