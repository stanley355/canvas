import TranslateLanguageMenuDesktop from "./TranslateLanguageMenuDesktop";
import TranslateResultBoxDesktop from "./TranslateResultBoxDesktop";
import TranslateSourceTextareaDesktop from "./TranslateSourceTextAreaDesktop";

const TranslateDesktopView = () => {
  return (
    <div className="hidden px-4 mt-4 lg:block">
      <TranslateLanguageMenuDesktop />
      <div className="grid grid-cols-2 gap-2">
        <TranslateSourceTextareaDesktop />
        <TranslateResultBoxDesktop />
      </div>
    </div>
  );
};

export default TranslateDesktopView;
