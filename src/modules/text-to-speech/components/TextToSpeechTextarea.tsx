import { ChangeEvent, useEffect, useState } from "react";
import { TbProgress, TbSpeakerphone, TbX } from "react-icons/tb";
import Cookies from "js-cookie";

import { Button } from "@/common/components/ui/button";
import { Textarea } from "@/common/components/ui/textarea";
import dynamic from "next/dynamic";
import { fetchTextToSpeechPrompt } from "@/common/lib/api/prompts/fetchTextToSpeechPrompt";
import { JwtPayload, decode } from "jsonwebtoken";
import { toast } from "react-toastify";
import { fetchTextToSpeechPromptFileDelete } from "@/common/lib/api/prompts/fetchTextToSpeechPromptFileDelete";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), { ssr: false });
const ExceedLimitModal = dynamic(() => import("../../../common/components/ExceedLimitModal"), { ssr: false });

interface ITextToSpeechTextarea {
  onConvertSuccess: (filename: string) => void;
}

const TextToSpeechTextarea = (props: ITextToSpeechTextarea) => {
  const { onConvertSuccess } = props

  const [previousFilename, setPreviousFilename] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const deleteFileOnQuit = async () => {
    await fetchTextToSpeechPromptFileDelete(previousFilename);
  }
  
  useEffect(() => {
    return () => {
      if (previousFilename) deleteFileOnQuit()
    }
  }, []);

  const handleClick = async () => {
    const token = Cookies.get("token");
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    setIsLoading(true);
    const user = decode(String(token)) as JwtPayload
    const ttsFetch = await fetchTextToSpeechPrompt(user.id, sourceText);

    if (ttsFetch.status && ttsFetch.status === 400) {
      if (ttsFetch?.data?.status === 600) {
        setIsLoading(false);
        setShowLimitModal(true);
        return;
      }
    }

    if (ttsFetch.file_name) {
      setIsLoading(false);
      onConvertSuccess(ttsFetch.file_name);

      if (previousFilename) {
        await fetchTextToSpeechPromptFileDelete(previousFilename);
      }

      setPreviousFilename(ttsFetch.file_name);
      return;
    }

    setIsLoading(false);
    toast.error("Server busy, please try again");
    return;
  }

  return (
    <div className="relative pb-2 border">
      <Button
        variant={"ghost"}
        className="absolute top-0 right-0"
        onClick={() => setSourceText("")}
      >
        <TbX className="text-2xl" />
      </Button>
      <Textarea
        placeholder="Enter Text"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSourceText(e.target.value)}
        value={sourceText}
        className="h-[25vh] border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <div className="flex items-center justify-between px-2">
        <div className="text-sm">
          {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
        </div>

        <Button className="gap-1" disabled={isLoading} onClick={handleClick}>
          {isLoading ? <TbProgress className="animate-spin" /> : <TbSpeakerphone />}
          <span>Convert</span>
        </Button>
      </div>

      {showLimitModal && <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />}
      {showLoginModal && <LoginModal />}
    </div>
  )
}

export default TextToSpeechTextarea