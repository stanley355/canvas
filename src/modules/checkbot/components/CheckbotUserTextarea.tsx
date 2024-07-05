import { memo } from "react"
import { TbX } from "react-icons/tb"
import NextButton from "@/common/components/NextButton"
import NextTextarea from "@/common/components/NextTextarea"
import { ICheckbotReducerAction } from "../lib/checkbotReducer"
import CheckbotSubmitBtn from "./CheckbotSubmitBtn"

interface CheckbotUserTextareaProps {
  userText: string;
  checkbotDispatch: (action: ICheckbotReducerAction) => void
}

const CheckbotUserTextarea = (props: CheckbotUserTextareaProps) => {
  const { checkbotDispatch, userText } = props;
  return (
    <div className="relative mb-4">
      <NextButton
        variant="none"
        className="absolute top-0 right-0 p-2 border border-l-transparent border-b-transparent rounded-lg  hover:border hover:bg-blue-100"
        onClick={() =>
          checkbotDispatch({ key: "userText", value: "" })
        }
      >
        <TbX className="font-bold text-3xl" />
      </NextButton>
      <NextTextarea
        autoFocus
        value={userText}
        className="border-base resize-none h-60 pr-12 focus:border-base hover:border-base"
        onChange={(e) => checkbotDispatch({ key: "userText", value: e.target.value })}
      />
      <CheckbotSubmitBtn />
    </div>
  )
}

export default memo(CheckbotUserTextarea)