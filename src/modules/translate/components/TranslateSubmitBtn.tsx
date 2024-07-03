import { useContext, useState } from "react"
import { TbLanguage, TbProgress } from "react-icons/tb"
import { toast } from "react-toastify"
import Cookies from "js-cookie"

import NextButton from "@/common/components/NextButton"
import { TranslateContext } from "./TranslateContext"

import { AppContext } from "@/modules/app/components/AppContext"
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent"
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames"
import { createTranslateSystemContent } from "../lib/createTranslateSystemContent"
import { JwtPayload, decode } from "jsonwebtoken"

const TranslateSubmitBtn = () => {
  const { appDispatch } = useContext(AppContext);
  const { translateStates, translateDispatch } = useContext(TranslateContext);
  const { firstLanguageText, firstLanguage, secondLanguage } = translateStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const token = Cookies.get('token');

    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    if (firstLanguageText === "") {
      toast.info("Text can't be empty");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.translate);
    const systemContent = createTranslateSystemContent(firstLanguage, secondLanguage);
    const user = decode(token) as JwtPayload;
  }

  return (
    <NextButton
      disabled={isLoading}
      onClick={handleClick}
      variant={isLoading ? "disabled" : "default"}
      className="absolute bottom-4 right-2 lg:right-3 p-2"
    >
      {isLoading ? <TbProgress className="animate-spin text-brand-primary" /> : <TbLanguage />}
      <span>Translate</span>
    </NextButton>
  )
}

export default TranslateSubmitBtn