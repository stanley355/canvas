

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select"
import { GRAMMAR_CHECK_INSTRUCTIONS } from "../lib/constant"
import { useGrammarCheck } from "../lib/useGrammarCheck"

const GrammarCheckInstructionSelect = () => {
  const { dispatch } = useGrammarCheck();
  return (
    <Select onValueChange={(value: string) => {
      dispatch({
        name: "instruction",
        value
      });
    }}>
      <SelectTrigger className="w-full mt-4 border-none focus:ring-0 focus:ring-transparent focus:ring-offset-0">
        <SelectValue placeholder="Select instruction" />
      </SelectTrigger>
      <SelectContent className="-left-2.5">
        {GRAMMAR_CHECK_INSTRUCTIONS.map((instruction: { label: string, value: string }) =>
          <SelectItem value={instruction.value}>{instruction.label}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}

export default GrammarCheckInstructionSelect