import { TbArrowRight } from "react-icons/tb";
import TranslateLanguageMenuBtn from "./TranslateLanguageMenuBtn";
import { useTranslateV2 } from "../lib/useTranslateV2";

const TranslateLanguageMenuMobile = () => {
  const { translateStates } = useTranslateV2();
  const { sourceLanguage, targetLanguage } = translateStates;

  return (
    <div className="grid grid-cols-[42.5%_15%_42.5%] w-full mt-4 place-items-center">
      <TranslateLanguageMenuBtn
        isSource
        languageLabel={sourceLanguage.label}
        optionTitle="Translate From"
      />
      <TbArrowRight />
      <TranslateLanguageMenuBtn
        isSource={false}
        languageLabel={targetLanguage.label}
        optionTitle="Translate To"
      />
    </div>
  );
};

export default TranslateLanguageMenuMobile;
