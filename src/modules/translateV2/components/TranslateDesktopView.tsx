import TranslateLanguageMenuDesktop from "./TranslateLanguageMenuDesktop"
import TranslateSourceTextareaDesktop from "./TranslateSourceTextAreaDesktop"

const TranslateDesktopView = () => {
  return (
    <div className="px-4 mt-4">
      <TranslateLanguageMenuDesktop />
      <div className="grid grid-cols-2 gap-2">
        <TranslateSourceTextareaDesktop />
        <TranslateSourceTextareaDesktop />
      </div>
    </div>
  )
}

export default TranslateDesktopView