import React, { useState } from "react";
import { FaLanguage, FaPlusSquare } from "react-icons/fa";
import dynamic from "next/dynamic";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import MediaSelect from "@/common/components/MediaSelect";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import PremiumTranslateResult from "@/modules/premium/components/TranslateResult";
import ComparisonTable from "@/common/components/ComparisonTable";
import FeedbackBox from "@/common/components/FeedbackBox";
import { TRANSLATE_COMPARISON } from "@/modules/translate/constant";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";

const PremiumTranslate = () => {
  const [isImageTranslate, setIsImageTranslate] = useState(false);
  const [imageText, setImageText] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [langTranslate, setLangTranslate] = useState("");

  const LoginModal = dynamic(
    () => import("../../modules/login/components/LoginModal")
  );

  const onImageTextDispatch = (txt: string) => {
    setImageText(txt);
    setIsImageTranslate(false);
    return;
  };

  return (
    <Layout>
      {showLogin && <LoginModal isFree={false} />}
      <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
      <div className="bg-white">
        <div className="container mx-auto p-2 lg:px-0">
          <div className="flex items-center gap-4 justify-between text-black">
            <h1
              className="text-2xl font-semibold rounded flex items-center justify-center my-4"
              id="title"
            >
              <FaLanguage className="text-4xl mr-2" />
              <span>Translate+</span>
            </h1>
            <MediaSelect
            style="dark"
              onChange={(option) =>
                setIsImageTranslate(option.value === "image")
              }
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
            {isImageTranslate ? (
              <div className="mb-2">
                <ImageToTextUploader style="dark" dispatch={onImageTextDispatch} />
              </div>
            ) : (
              <PremiumTranslateForm
                imageText={imageText}
                onReuploadClick={() => setIsImageTranslate(true)}
                dispatchLoginForm={() => setShowLogin(true)}
                dispatchLangTranslate={setLangTranslate}
              />
            )}
            <PremiumTranslateResult translateVal={langTranslate} />
          </div>
          <div className="text-black mb-4">
            <div>How does Premium Checkbot Compared to the Original?</div>
            <ComparisonTable comparisons={TRANSLATE_COMPARISON} />
          </div>
          <div className="bg-black py-4 rounded">
            <FeedbackBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;
