import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import { FaClock, FaLanguage } from "react-icons/fa";

import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import HistoryBar from "@/common/components/HistoryBar";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import FeedbackBox from "@/common/components/FeedbackBox";
import MediaSelect from "@/common/components/MediaSelect";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { translateReducer } from "@/modules/translate/lib/reducer";
import { TRANSLATE_STATES } from "@/modules/translate/lib/states";
import { TRANSLATE_SEO } from "@/modules/translate/lib/constant";
import ReferralPromo from "@/common/components/ReferralPromo";
import PaypalBanner from "@/common/components/PaypalBanner";

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const LangTranslate = () => {
  const [state, dispatch] = useReducer(translateReducer, TRANSLATE_STATES);
  const {
    isImageTranslate,
    imageText,
    showLogin,
    showHistory,
    originalText,
    translateCompletion,
  } = state;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  const onImageTextDispatch = (txt: string) => {
    sendFirebaseEvent("image_translate", {});
    updateState("imageText", txt);
    updateState("isImageTranslate", false);
    return;
  };

  const handleHistoryClick = (history: any) => {
    updateState("originalText", history.originalText);
    updateState("translateCompletion", history.completionText);
    updateState("showHistory", false);
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
          <MediaSelect
            onChange={(opt) =>
              updateState("isImageTranslate", opt.value === "image")
            }
          />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          {isImageTranslate ? (
            <ImageToTextUploader
              titleColor="white"
              dispatch={onImageTextDispatch}
            />
          ) : (
            <TranslateForm
              originalText={originalText}
              imageText={imageText}
              onReuploadClick={() => updateState("isImageTranslate", true)}
              dispatchLoginForm={() => updateState("showLogin", true)}
              dispatchTranslateVal={(val) =>
                updateState("translateCompletion", val)
              }
            />
          )}
          <TranslateResult translateVal={translateCompletion} />
        </div>
        <Button
          type="button"
          wrapperClassName="p-2 w-fit bg-blue-900 rounded-md mx-auto cursor-pointer mb-8"
          buttonClassName="w-full flex items-center gap-2 h-full"
          onClick={() => {
            sendFirebaseEvent("show_history", {});
            updateState("showHistory", !showHistory);
          }}
        >
          <FaClock />
          <span>Show History</span>
        </Button>
        {showHistory && (
          <HistoryBar
            pageType="translate"
            onHistoryClick={handleHistoryClick}
            onCloseClick={() => updateState("showHistory", false)}
          />
        )}
        <PaypalBanner />
        <ReferralPromo />
        <TranslateComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default LangTranslate;
