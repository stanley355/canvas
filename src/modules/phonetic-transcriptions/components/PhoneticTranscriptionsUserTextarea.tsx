import { useContext, memo } from "react";
import { TbX } from "react-icons/tb";

import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";
import { IPhoneticTranscriptionsReducerAction } from "../lib/PhoneticTranscriptionsReducer";
import PhoneticTranscriptionsSubmitBtn from "./PhoneticTranscriptionsSubmitBtn";

interface PhoneticTranscriptionsUserTextareaProps {
  userText: string;
  phoneticTranscriptionsDispatch: (
    action: IPhoneticTranscriptionsReducerAction
  ) => void;
}

const PhoneticTranscriptionsUserTextarea = ({
  userText,
  phoneticTranscriptionsDispatch,
}: PhoneticTranscriptionsUserTextareaProps) => {
  return (
    <div className="relative mb-4">
      <NextButton
        variant="none"
        className="absolute top-0 right-0 p-2 border border-l-transparent border-b-transparent rounded-lg  hover:border hover:bg-blue-100"
        onClick={() =>
          phoneticTranscriptionsDispatch({ key: "userText", value: "" })
        }
      >
        <TbX className="font-bold text-3xl" />
      </NextButton>
      <NextTextarea
        placeholder="Type or Paste"
        value={userText}
        className="border-base resize-none h-60 pr-12 focus:border-base hover:border-base"
        onChange={(e) =>
          phoneticTranscriptionsDispatch({
            key: "userText",
            value: e.target.value,
          })
        }
      />

      <PhoneticTranscriptionsSubmitBtn />
    </div>
  );
};

export default memo(PhoneticTranscriptionsUserTextarea);
