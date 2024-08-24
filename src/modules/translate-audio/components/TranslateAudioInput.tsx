import {
  ChangeEvent,
  LegacyRef,
  memo,
  useContext,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { TbMicrophone, TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";
import { decode, JwtPayload } from "jsonwebtoken";

import Button from "@/common/components/Button";

import { AppContext } from "@/modules/app/components/AppContext";
import { TranslateAudioContext } from "./TranslateAudioContext";

import { uploadFileToFirebase } from "@/modules/firebase/lib/uploadFileToFirebase";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

const TranslateAudioInput = () => {
  const { appDispatch } = useContext(AppContext);
  const { translateAudioDispatch, translateAudioStates } = useContext(
    TranslateAudioContext
  );
  const { fileName } = translateAudioStates;

  const inputRef = useRef<HTMLInputElement>();
  const [isUploading, setIsUploading] = useState(false);

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

    setIsUploading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.translate_audio_upload); // setIsUploading(true);

    try {
      const user = decode(token) as JwtPayload;
      const storagePath = `audio/translations/${
        user.id
      }:${new Date().getTime()}`;
      const fileURL = await uploadFileToFirebase(storagePath, file);

      translateAudioDispatch({ key: "fileUrl", value: fileURL });
      translateAudioDispatch({ key: "fileName", value: file.name });
      setIsUploading(false);
      return;
    } catch (error: any) {
      setIsUploading(false);
      toast.error("Server busy, please try again");
      return;
    }
  };

  return (
    <>
      <input
        type="file"
        id="audio_input"
        name="file"
        accept=".mp3, .mp4, .wav"
        className="invisible h-0"
        onChange={handleUpload}
        ref={inputRef as LegacyRef<HTMLInputElement>}
      />
      <Button
        type="button"
        variant="ghost"
        className="w-full h-40 gap-2 text-base rounded-none"
        onClick={() => inputRef.current?.click()}
      >
        {isUploading ? (
          <div className="flex items-center gap-2">
            <TbProgress className="animate-spin" />
            Uploading
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <TbMicrophone />
            {fileName ? fileName : "Click here to upload"}
          </div>
        )}
      </Button>
    </>
  );
};

export default memo(TranslateAudioInput);
