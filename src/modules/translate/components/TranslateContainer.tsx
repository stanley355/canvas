import React from "react";
import TranslateHeader from "./TranslateHeader";
import TranslateLanguageDropdown from "./TranslateLanguageDropdown";
import TranslateContextInput from "./TranslateContextInput";
import TranslateTextInput from "./TranslateTextInput";
import TranslateResultBox from "./TranslateResultBox";

const TranslateContainer = () => {
  return (
    <div className="container mx-auto">
      <TranslateHeader />
      <div className="px-2 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <TranslateLanguageDropdown />
          <TranslateContextInput />
          <TranslateTextInput />
        </div>
        <TranslateResultBox />
      </div>
    </div>
  );
};

export default TranslateContainer;
