import { Button } from "@/common/components/ui/button";
import TranslateLanguageOptionsMobile from "./TranslateLanguageOptionsMobile";
import { useState } from "react";

interface ITranslateLanguageMenuBtn {
  isSource: boolean;
  languageLabel: string;
  optionTitle: string;
}

const TranslateLanguageMenuBtn = (props: ITranslateLanguageMenuBtn) => {
  const { languageLabel, optionTitle, isSource } = props;
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <Button variant={"ghost"} onClick={() => setShowOptions(true)}>
        {languageLabel}
      </Button>
      {showOptions && (
        <TranslateLanguageOptionsMobile
          isSource={isSource}
          title={optionTitle}
          onCloseClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
};

export default TranslateLanguageMenuBtn;
