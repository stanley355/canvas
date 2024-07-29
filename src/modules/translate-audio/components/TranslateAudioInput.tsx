import {
  FormEvent,
  useContext,
  useRef,
  useState,
  memo,
  ChangeEvent,
} from "react";
import { TbMicrophone, TbProgress, TbUpload } from "react-icons/tb";
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { decode, JwtPayload } from "jsonwebtoken";
import Cookies from "js-cookie";

import NextButton from "@/common/components/NextButton";
import { AppContext } from "@/modules/app/components/AppContext";

import { cn } from "@/common/lib/cn";
import { fetchPromptsAudioTranscriptions } from "@/common/lib/api/prompts/fetchPromptsAudioTranscriptions";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { ITranslateAudioStates } from "../lib/TranslateAudioStates";
import { ITranslateAudioReducerAction } from "../lib/TranslateAudioReducer";
import { fetchPromptsAudioTranslations } from "@/common/lib/api/prompts/fetchPromptsAudioTranslations";

interface TranslateAudioInputProps {
  translateAudioStates: ITranslateAudioStates;
  translateAudioDispatch: (action: ITranslateAudioReducerAction) => void;
}

const TranslateAudioInput = ({translateAudioStates, translateAudioDispatch}: TranslateAudioInputProps) => {
  const { appDispatch } = useContext(AppContext);
  const { temperature, fileName, fileUrl } = translateAudioStates;

  const inputRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (!fileUrl) {
      toast.error("Please upload a file");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.translate_audio);
    const user = decode(token) as JwtPayload;
    const req = {
      user_id: user.id,
      file_url: fileUrl,
      file_name: fileName,
      temperature,
    };

    const translations = await fetchPromptsAudioTranslations(req);
    setIsLoading(false);

    if (translations?.status === 402) {
      appDispatch({ key: "showMonthlyLimitModal", value: true });
      return;
    }

    if (translations?.completion_text) {
      translateAudioDispatch({ key: "text", value: translations.completion_text });
      return;
    }

    toast.error("Server busy, please try again");
    return;
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const token = Cookies.get("token");
    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    const target = e.target as any;
    const file = target.files[0];
    const maxFileSize = 24 * 1024 * 1024; // 24MB
    if (file.size > maxFileSize) {
      toast.error("Max file size is 24MB");
      return;
    }

    sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.translate_audio_upload);
    setIsUploading(true);
    try {
      const user = decode(token) as JwtPayload;
      const firebasePath = `audio/transcriptions/${
        user.id
      }:${new Date().getTime()}`;
      const storage = getStorage();
      const storef = ref(storage, firebasePath);
      const result = await uploadBytes(storef, file);
      const downloadURL = await getDownloadURL(result.ref);

      translateAudioDispatch({key: "fileName", value: file.name});
      translateAudioDispatch({key: "fileUrl", value: downloadURL})
      setIsUploading(false);
      return;
    } catch (error: any) {
      setIsUploading(false);
      toast.error("Server busy, please try again");
      return;
    }
  };

  return (
    <form className="px-2 lg:px-0 relative" onSubmit={handleSubmit}>
      <NextButton
        type="button"
        disabled={isLoading || isUploading}
        variant={isLoading || isUploading ? "disabled" : "outline"}
        className="flex-col justify-center h-48 lg:h-52 w-full"
        onClick={() => inputRef.current.click()}
      >
        {isLoading || isUploading ? (
          <TbProgress className="text-3xl animate-spin" />
        ) : (
          <TbUpload className="text-3xl" />
        )}
        <div className="text-lg">{fileName ? fileName : "Click to Upload"}</div>
        <div className="text-gray-500">
          {fileName ? "Click Convert to Continue" : "*Max file size 24 MB"}
        </div>
      </NextButton>
      <NextButton
        disabled={isLoading || isUploading}
        className={cn("absolute right-3 bottom-8 lg:right-1 ", {
          "border-brand-primary": isLoading || isUploading,
        })}
        type="submit"
      >
        <TbMicrophone />
        <div>
          {isLoading
            ? "This may take a while"
            : isUploading
            ? "Uploading..."
            : "Convert"}
        </div>
      </NextButton>
      <input
        type="file"
        id="audio_input"
        name="audio"
        ref={inputRef}
        accept=".mp3, .mp4, .wav"
        className="invisible h-0"
        onChange={handleUpload}
      />
    </form>
  );
};

export default memo(TranslateAudioInput);
