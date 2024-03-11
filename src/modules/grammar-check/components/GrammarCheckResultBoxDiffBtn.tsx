import { Button } from "@/common/components/ui/button"
import { MdAutoAwesome } from "react-icons/md"
import { TbMinus, TbPlus } from "react-icons/tb"
import { useGrammarCheck } from "../lib/useGrammarCheck"
import { GrammarCheckDiffs } from "../lib/grammarCheckStates"
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent"

const GrammarCheckResultBoxDiffBtn = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { activeDiff } = grammarCheckStates;


  return (
    <div className="grid grid-cols-3">
      <Button
        variant={activeDiff === GrammarCheckDiffs.Removed ? "default" : 'ghost'}
        onClick={() => {
          sendFirebaseEvent("grammar_check_removed_diff");
          dispatch({
            name: "activeDiff",
            value: GrammarCheckDiffs.Removed
          })
        }}
        className='gap-2 rounded-none' >
        <TbMinus />
        <span>Removed</span>
      </Button>
      <Button
        variant={activeDiff === GrammarCheckDiffs.Original ? "default" : 'ghost'}
        onClick={() => {
          dispatch({
            name: "activeDiff",
            value: GrammarCheckDiffs.Original
          })
        }}
        className='gap-2 rounded-none' >
        <MdAutoAwesome />
        <span>Result</span>
      </Button>
      <Button
        variant={activeDiff === GrammarCheckDiffs.Added ? "default" : 'ghost'}
        onClick={() => {
          sendFirebaseEvent("grammar_check_added_diff");
          dispatch({
            name: "activeDiff",
            value: GrammarCheckDiffs.Added
          })
        }}

        className='gap-2 rounded-none' >
        <TbPlus />
        <span>Added</span>
      </Button>
    </div>
  )
}

export default GrammarCheckResultBoxDiffBtn