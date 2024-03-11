import { Textarea } from '@/common/components/ui/textarea'
import GrammarCheckInstructionSelect from './GrammarCheckInstructionSelect'
import { useGrammarCheck } from '../lib/useGrammarCheck'
import { ChangeEvent } from 'react';
import GrammarCheckSourceTextareaBtn from './GrammarCheckSourceTextareaBtn';

const GrammarCheckSourceTextarea = () => {
  const { grammarCheckStates, dispatch } = useGrammarCheck();
  const { sourceText } = grammarCheckStates;

  return (
    <div >
      <GrammarCheckInstructionSelect />
      <div className="pb-2 border">
        <Textarea
          placeholder="Enter Text"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch({
              name: "sourceText",
              value: e.target.value
            })
          }}
          value={sourceText}
          className="h-[25vh] overflow-scroll border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        <div className="flex items-center justify-between px-2">
          <div className="text-xs">
            {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
          </div>
          <GrammarCheckSourceTextareaBtn />
        </div>
      </div>
    </div>
  )
}

export default GrammarCheckSourceTextarea