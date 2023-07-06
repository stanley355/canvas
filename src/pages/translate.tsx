import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import FeedbackBox from "@/common/components/FeedbackBox";
import { TRANSLATE_SEO } from "@/modules/translate/constant";
import MediaSelect from "@/common/components/MediaSelect";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const LangTranslate = () => {
  const [isImageTranslate, setIsImageTranslate] = useState(false);
  const [imageText, setImageText] = useState("");
  const [translateVal, setTranslateVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const LoginModal = dynamic(
    () => import("../modules/login/components/LoginModal")
  );

  const onImageTextDispatch = (txt: string) => {
    sendFirebaseEvent("image_translate", {});
    setImageText(txt);
    setIsImageTranslate(false);
    return;
  };

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className="lg:container mx-auto px-2 lg:px-0">
        <div className="flex items-center justify-between my-4">

          <h1
            className="text-xl lg:text-2xl flex items-center justify-center"
            id="title"
          >
            <FaLanguage className="text-4xl mr-2" />
            <span>Translate</span>
          </h1>
          <MediaSelect style="white" onChange={(opt) => setIsImageTranslate(opt.value === "image")} />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          {isImageTranslate ? <ImageToTextUploader style="white" dispatch={onImageTextDispatch} />
            :
            <TranslateForm
              imageText={imageText}
              onReuploadClick={() => setIsImageTranslate(true)}
              dispatchLoginForm={() => setShowLogin(true)}
              dispatchTranslateVal={(val) => setTranslateVal(val)}
            />
          }
          <TranslateResult translateVal={translateVal} />
        </div>
        <TranslateComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default LangTranslate;
