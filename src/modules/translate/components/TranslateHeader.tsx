import React from "react";
import { FaLanguage } from "react-icons/fa6";

const TranslateHeader = () => {
  return (
    <h1
      className="text-xl font-semibold rounded flex items-center justify-center my-4"
      id="title"
    >
      <FaLanguage className="text-4xl mr-2" />
      <span>AI Translate</span>
    </h1>
  );
};

export default TranslateHeader;
