import { memo, useState } from 'react'
import NextSelect from '@/common/components/NextSelect'
import NextInput from '@/common/components/NextInput'
import { CHECKBOT_INSTRUCTIONS } from '../lib/checkbotInstructions'
import { ICheckbotReducerAction } from '../lib/checkbotReducer'
import { cn } from '@/common/lib/cn'

interface CheckbotInstructionSelectProps {
  checkbotDispatch: (action: ICheckbotReducerAction) => void;
}

const CheckbotInstructionSelect = (props: CheckbotInstructionSelectProps) => {
  const { checkbotDispatch } = props;
  const [showCustom, setShowCustom] = useState(false);

  return (
    <>
      <NextSelect
        placeholder='Select Instruction'
        options={CHECKBOT_INSTRUCTIONS}
        selectClassname='border-base'
        onChange={(option) => {
          setShowCustom(option.value === "custom");
          checkbotDispatch({ key: "instruction", value: option.value });
          if (option.value !== "custom") checkbotDispatch({ key: "customInstruction", value: "" });
        }}
      />
      <NextInput
        placeholder='As you wish, master'
        className={cn('my-2 border-base', showCustom ? "block" : "hidden")}
        onChange={(e) => checkbotDispatch({ key: "customInstruction", value: e.target.value })}
      />
    </>
  )
}

export default memo(CheckbotInstructionSelect)