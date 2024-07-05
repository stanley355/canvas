import { useContext, memo } from "react";
import { TbX } from "react-icons/tb";

import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";

import { TextToSpeechContext } from "./TextToSpeechContext";
import TextToSpeechSubmitBtn from "./TextToSpeechSubmitBtn";

const TextToSpeechTextarea = () => {
  const { textToSpeechDispatch, textToSpeechStates } = useContext(TextToSpeechContext);
  const { userText } = textToSpeechStates;

  return (
    <div className="relative mb-4">
      <NextButton
        variant="none"
        className="absolute top-0 right-0 p-2 border border-l-transparent border-b-transparent rounded-lg  hover:border hover:bg-blue-100"
        onClick={() =>
          textToSpeechDispatch({ key: "userText", value: "" })
        }
      >
        <TbX className="font-bold text-3xl" />
      </NextButton>
      <NextTextarea
        placeholder="Type or Paste"
        value={userText}
        className="border-base resize-none h-60 pr-12 focus:border-base hover:border-base"
        onChange={(e) =>
          textToSpeechDispatch({ key: "userText", value: e.target.value })
        }
      />
      <div className="absolute left-2 bottom-4">{userText.split("").length} / 4000</div>
      <TextToSpeechSubmitBtn />
    </div>
  );
};

export default memo(TextToSpeechTextarea);
