import React from "react";
import TranslateLanguageBar from "./TranslateLanguageBar";
import TranslateFirstLanguageTextarea from "./TranslateFirstLanguageTextarea";
import TranslateSecondLanguageTextarea from "./TranslateSecondLanguageTextarea";

const TranslateBody = () => {
  return (
    <div>
      <TranslateLanguageBar />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <TranslateFirstLanguageTextarea />
        <TranslateSecondLanguageTextarea />
      </div>
    </div>
  );
};

export default TranslateBody;
