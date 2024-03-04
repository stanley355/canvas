import { Button } from "@/common/components/ui/button"
import TranslateLanguageOptionsMobile from "./TranslateLanguageOptionsMobile"
import { useState } from "react"

const TranslateLanguageMenuBtn = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <Button variant={'ghost'} onClick={() => setShowOptions(true)}>Detect Language</Button>
      {showOptions && <TranslateLanguageOptionsMobile title="Translate From" onCloseClick={() => setShowOptions(false)} />}
    </div>
  )
}

export default TranslateLanguageMenuBtn