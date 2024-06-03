import { useTranslateV2 } from "../lib/useTranslateV2";
import TranslateLanguageMenuDesktop from "./TranslateLanguageMenuDesktop";
import TranslateResultBoxDesktop from "./TranslateResultBoxDesktop";
import TranslateSourceTextareaDesktop from "./TranslateSourceTextAreaDesktop";

const TranslateDesktopView = () => {
  const { translateStates } = useTranslateV2();
  const { translatedTexts } = translateStates;
  return (
    <div className="hidden px-4 mt-4 lg:block">
      <TranslateLanguageMenuDesktop />
      <div className="grid grid-cols-2 gap-2">
        <TranslateSourceTextareaDesktop />
        {translatedTexts.length > 0 ? (
          translatedTexts.map((text: string, index: number) => (
            <TranslateResultBoxDesktop
              key={`translate_result_${index}`}
              translatedText={text}
            />
          ))
        ) : (
          <TranslateResultBoxDesktop translatedText="" />
        )}
      </div>
    </div>
  );
};

export default TranslateDesktopView;
