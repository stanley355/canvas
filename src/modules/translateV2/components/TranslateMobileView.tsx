import TranslateLanguageMenuMobile from "./TranslateLanguageMenuMobile";
import TranslateSourceTextareaMobile from "./TranslateSourceTextareaMobile";
import TranslateResultBoxMobile from "./TranslateResultBoxMobile";
import { useTranslateV2 } from "../lib/useTranslateV2";

const TranslateMobileView = () => {
  const { translateStates } = useTranslateV2();
  const { translatedTexts } = translateStates;
  return (
    <div className="lg:hidden">
      <TranslateLanguageMenuMobile />
      <TranslateSourceTextareaMobile />

      {translatedTexts.length > 0 && translatedTexts.map((text: string, index:number) =>

        <TranslateResultBoxMobile key={`translate_result_${index}`} translatedText={text} />
      )
      }

    </div>
  );
};

export default TranslateMobileView;
