import { TbBrandGoogle } from "react-icons/tb"
import GrammarCheckSourceTextarea from "./GrammarCheckSourceTextarea"
import GrammarCheckResultBox from "./GrammarCheckResultBox"
import TranslateProps from "@/modules/translateV2/components/TranslateProps"

const GrammarCheckContainer = () => {
  return (
    <div className="container px-0 mx-auto my-16 lg:my-4 lg:px-4 lg:min-h-[80vh]">
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbBrandGoogle className="text-xl" />
        <span>Grammar Check</span>
      </div>
      <div className="lg:w-full lg:grid lg:grid-cols-2 lg:gap-2">

      <GrammarCheckSourceTextarea />
      <GrammarCheckResultBox />
      </div>
      <TranslateProps />
    </div>
  )
}

export default GrammarCheckContainer