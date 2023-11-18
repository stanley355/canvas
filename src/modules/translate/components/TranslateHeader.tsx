import React from "react";
import { FaLanguage } from "react-icons/fa6";
import TranslateTypeDropdown from "./TranslateTypeDropdown";

const TranslateHeader = () => {
  return (
    <div className="flex items-center justify-between text-black px-2">
      <h1
        className="text-xl font-semibold rounded flex items-center justify-center my-4"
        id="title"
      >
        <FaLanguage className="text-4xl mr-2" />
        <span>AI Translate</span>
      </h1>
      <TranslateTypeDropdown />
    </div>
  );
};

export default TranslateHeader;
