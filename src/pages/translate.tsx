import React, { useReducer, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaClock, FaLanguage } from "react-icons/fa";
import Cookies from "js-cookie";

import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import HistoryBar from "@/common/components/HistoryBar";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import FeedbackBox from "@/common/components/FeedbackBox";
import MediaSelect from "@/common/components/MediaSelect";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { translateReducer } from "@/modules/translate/lib/reducer";
import { TRANSLATE_STATES } from "@/modules/translate/lib/states";
import { TRANSLATE_SEO } from "@/modules/translate/lib/constant";

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const PlansOfferModal = dynamic(() => import("../modules/premium/components/PlansOfferModal"));

const LangTranslate = () => {
  const [state, dispatch] = useReducer(translateReducer, TRANSLATE_STATES);
  const {
    isImageTranslate,
    imageText,
    showLogin,
    showOffer,
    showHistory,
    originalText,
    translateCompletion,
  } = state;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const offer = Cookies.get("offer");
      if (!offer) updateState("showOffer", true);
      Cookies.set("offer", "true", { expires: 1 });
    }

    return () => {
      Cookies.set("offer", "true", { expires: 1 });
    }
  }, [showOffer]);

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
      {showLogin && <LoginModal />}
      {showOffer && <PlansOfferModal onCloseClick={() => updateState("showOffer", false)} />}
      <div className="bg-gradient-to-b from-black via-blue-900 to-white pb-4">
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
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-blue-900 to-black pt-4">
        <div className="lg:container mx-auto px-2 lg:px-0">
          <FeedbackBox />
        </div>
      </div>
    </Layout>
  );
};

export default LangTranslate;
