import { Button } from "@/common/components/ui/button"
import { TbArrowRight } from "react-icons/tb"
import TranslateLanguageMenuBtn from "./TranslateLanguageMenuBtn"

const TranslateLanguageMenuMobile = () => {
  return (
    <div className="flex items-center justify-around w-full mt-4 ">
      <TranslateLanguageMenuBtn />
      <TbArrowRight />
      <Button>Detect Language</Button>
    </div>
  )
}

export default TranslateLanguageMenuMobile