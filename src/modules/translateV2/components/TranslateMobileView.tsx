
import TranslateLanguageMenuMobile from "./TranslateLanguageMenuMobile";
import TranslateSourceTextareaMobile from "./TranslateSourceTextareaMobile";
import TranslateResultBoxMobile from "./TranslateResultBoxMobile";

const TranslateMobileView = () => {
  return (
    <div className="lg:hidden">
      <TranslateLanguageMenuMobile />
      <TranslateSourceTextareaMobile />
      <TranslateResultBoxMobile />
    </div>
  )
}

export default TranslateMobileView