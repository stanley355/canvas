import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { TbPhotoAi } from "react-icons/tb";
import Tesseract from "tesseract.js";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import ImageToTextCtaBtn from "./ImageToTextCtaBtn";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import {
  PromptsV2Type,
  fetchPromptsV2,
} from "@/common/lib/apiV2/prompts/fetchPromptsV2";
import { fetchUpdateImageToTextPromptsV2 } from "@/common/lib/apiV2/prompts/fetchUpdateImageToTextPromptV2";

interface IImageToTextInput {
  recognizedText: string;
  dispatchRecognizedText: (text: string) => void;
}

const LoginModal = dynamic(() => import("../../login/components/LoginModal"), {
  ssr: false,
});
const ExceedLimitModal = dynamic(
  () => import("../../../common/components/ExceedLimitModal"),
  { ssr: false }
);

const ImageToTextInput = (props: IImageToTextInput) => {
  const { dispatchRecognizedText, recognizedText } = props;
  const fileInput = useRef<any>(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("-");
  const [recognizeProgress, setRecognizeProgress] = useState(0);

  const isLoading = useMemo(() => {
    return recognizeProgress !== 0 && recognizeProgress !== 100;
  }, [recognizeProgress]);

  const recognizeText = async (imageUrl: string) => {
    try {
      const result = await Tesseract.recognize(imageUrl, undefined, {
        logger: (log) => setRecognizeProgress(Math.round(log.progress * 100)),
      });

      dispatchRecognizedText(result.data.text);
      return;
    } catch (error) {
      toast.error("Fail to convert, please try again");
      return;
    }
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const token = Cookies.get("token");
    if (!token) {
      setShowLoginModal(true);
      return;
    }

    sendFirebaseEvent("image_to_text");

    const user = decode(token) as JwtPayload;
    const payload = {
      user_id: user.id,
      prompt_type: PromptsV2Type.ImageToText,
      system_content: "",
      user_content: "",
    };
    const promptResponse = await fetchPromptsV2(payload);

    // Payment Required
    if (promptResponse?.status === 402) {
      setShowLimitModal(true);
      return;
    }

    if (promptResponse.id) {
      const target = event.target as any;
      const image = target.files[0];
      setImageName(image.name);

      const imageUrl = URL.createObjectURL(image);
      setImageUrl(imageUrl);
      recognizeText(imageUrl);

      const payload = {
        user_id: user.id,
        prompt_id: promptResponse.id,
        completion_text: recognizedText,
      };
      await fetchUpdateImageToTextPromptsV2(payload);
      return;
    }

    toast.info("Server busy, please try again");
    return;
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file_input"
        ref={fileInput}
        className="hidden"
        accept=".jpeg,.jpg, .png, .webp "
        onChange={handleImageUpload}
      />
      <button
        type="button"
        disabled={isLoading}
        className="w-full pb-4 mt-4 lg:mt-0 h-1/4 border-y lg:border lg:rounded-md lg:h-60 lg:pb-2"
        onClick={() => fileInput.current.click()}
      >
        {imageUrl ? (
          <Image
            className="w-full h-40 lg:h-44 lg:rounded-t-md"
            src={imageUrl}
            width={350}
            height={350}
            alt="Uploaded Image"
          />
        ) : (
          <TbPhotoAi className="w-full text-[10rem] text-blue-700 h-40" />
        )}
        <ImageToTextCtaBtn
          isLoading={isLoading}
          recognizeProgress={recognizeProgress}
          imageName={imageName}
        />
      </button>
      {showLoginModal && <LoginModal />}
      {showLimitModal && (
        <ExceedLimitModal onCloseClick={() => setShowLimitModal(false)} />
      )}
    </div>
  );
};

export default ImageToTextInput;
