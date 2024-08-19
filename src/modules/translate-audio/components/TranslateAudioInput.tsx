import { ChangeEvent, LegacyRef, memo, useContext, useRef, useState } from "react";
import { TbMicrophone } from "react-icons/tb";
import Cookies from "js-cookie";
import {toast} from 'react-toastify';

import Button from "@/common/components/Button";
import { AppContext } from "@/modules/app/components/AppContext";

const TranslateAudioInput = () => {
  const {appDispatch} = useContext(AppContext);
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

    // sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.translate_audio_upload);
    // setIsUploading(true);
    // try {
    //   const user = decode(token) as JwtPayload;
    //   const firebasePath = `audio/transcriptions/${
    //     user.id
    //   }:${new Date().getTime()}`;
    //   const storage = getStorage();
    //   const storef = ref(storage, firebasePath);
    //   const result = await uploadBytes(storef, file);
    //   const downloadURL = await getDownloadURL(result.ref);

    //   translateAudioDispatch({ key: "fileName", value: file.name });
    //   translateAudioDispatch({ key: "fileUrl", value: downloadURL });
    //   setIsUploading(false);
    //   return;
    // } catch (error: any) {
    //   setIsUploading(false);
    //   toast.error("Server busy, please try again");
    //   return;
    // }
  };

  return (
    <>
      <input
        type="file"
        id="audio_input"
        name="audio"
        ref={inputRef as LegacyRef<HTMLInputElement>}
        accept=".mp3, .mp4, .wav"
        className="invisible h-0"
      // onChange={handleUpload} 
      />
      <Button
        type="button"
        className="w-full h-40 gap-2 text-base rounded-none"
        variant="ghost"
      >
        <TbMicrophone />
        Click here to upload
      </Button>

    </>
  );
};

export default memo(TranslateAudioInput);
