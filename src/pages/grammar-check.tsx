import GrammarCheckContainer from "@/modules/grammar-check/components/GrammarCheckContainer"
import GrammarCheckProvider from "@/modules/grammar-check/components/GrammarCheckProvider"

const GrammarCheck = () => {
  return (
    <GrammarCheckProvider>
      <GrammarCheckContainer />
    </GrammarCheckProvider>
  )
}

export default GrammarCheck