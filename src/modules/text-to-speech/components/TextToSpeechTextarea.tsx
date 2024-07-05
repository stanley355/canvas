import { ChangeEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { JwtPayload, decode } from "jsonwebtoken";
import { TbProgress, TbSpeakerphone, TbX } from "react-icons/tb";
import Cookies from "js-cookie";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import {
  PromptsV2Type,
  fetchPromptsV2,
} from "@/common/lib/apiV2/prompts/fetchPromptsV2";
import { fetchDeleteTtsFileV2 } from "@/common/lib/apiV2/prompts/fetchDeleteTtsFileV2";
import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";
import { TextToSpeechContext } from "./TextToSpeechContext";


const TextToSpeechTextarea = () => {

  const { textToSpeechDispatch, textToSpeechStates } = useContext(TextToSpeechContext);
  const { userText } = textToSpeechStates;

  const [previousFileID, setPreviousFileID] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get("token");
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    if (!sourceText) {
      toast.info("Text can not be empty");
      return;
    }

    if (sourceText.split(" ").length > 5000) {
      toast.info("Maximum 5,000 words");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent("text_to_speech");

    const user = decode(String(token)) as JwtPayload;
    const payload = {
      user_id: user.id,
      prompt_type: PromptsV2Type.TextToSpeech,
      system_content: "",
      user_content: sourceText,
    };
    const promptResponse = await fetchPromptsV2(payload);

    // Payment Required
    if (promptResponse?.status === 402) {
      setShowLimitModal(true);
      return;
    }

    if (promptResponse.id) {
      setIsLoading(false);
      // onConvertSuccess(String(promptResponse.id));

      if (previousFileID) await fetchDeleteTtsFileV2(Number(previousFileID));
      setPreviousFileID(String(promptResponse.id));
      return;
    }

    setIsLoading(false);
    toast.error("Server busy, please try again");
    return;
  };

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
      {/* <Button
        variant={"ghost"}
        className="absolute top-0 right-0"
        onClick={() => setSourceText("")}
      >
        <TbX className="text-2xl" />
      </Button>
      <Textarea
        placeholder="Enter Text"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setSourceText(e.target.value)
        }
        value={sourceText}
        className="h-[25vh] border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <div className="flex items-center justify-between px-2">
        <div className="text-sm">
          {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
        </div>

        <Button className="gap-1" disabled={isLoading} onClick={handleClick}>
          {isLoading ? (
            <TbProgress className="animate-spin" />
          ) : (
            <TbSpeakerphone />
          )}
          <span>Convert</span>
        </Button>
      </div> */}

    </div>
  );
};

export default TextToSpeechTextarea;
