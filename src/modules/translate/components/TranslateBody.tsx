import React from "react";
import TranslateLanguageBar from "./TranslateLanguageBar";
import TranslateFirstLanguageTextarea from "./TranslateFirstLanguageTextarea";

const TranslateBody = () => {
  return (
    <div>
      <TranslateLanguageBar />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <TranslateFirstLanguageTextarea />
        <TranslateFirstLanguageTextarea />
      </div>
    </div>
  );
};

export default TranslateBody;
