import { memo, useState } from "react";
import NextSelect from "@/common/components/NextSelect";
import NextInput from "@/common/components/NextInput";
import { cn } from "@/common/lib/cn";
import { CHECKBOT_INSTRUCTIONS } from "../lib/checkbotInstructions";
import { ICheckbotReducerAction } from "../lib/checkbotReducer";

interface CheckbotInstructionSelectProps {
  checkbotDispatch: (action: ICheckbotReducerAction) => void;
}

const CheckbotInstructionSelect = (props: CheckbotInstructionSelectProps) => {
  const { checkbotDispatch } = props;
  const [showCustom, setShowCustom] = useState(false);

  return (
    <>
      <NextSelect
        placeholder="Select Instruction"
        options={CHECKBOT_INSTRUCTIONS}
        selectClassname="rounded-none lg:rounded-lg border-transparent"
        onChange={(option) => {
          setShowCustom(option.value === "custom");
          checkbotDispatch({ key: "instruction", value: option.value });
          if (option.value !== "custom")
            checkbotDispatch({ key: "customInstruction", value: "" });
        }}
      />
      <NextInput
        autoFocus
        placeholder="Write your instruction here"
        className={cn(
          "my-2 border-base rounded-none lg:rounded-lg",
          showCustom ? "block" : "hidden"
        )}
        onChange={(e) =>
          checkbotDispatch({ key: "customInstruction", value: e.target.value })
        }
      />
    </>
  );
};

export default memo(CheckbotInstructionSelect);
