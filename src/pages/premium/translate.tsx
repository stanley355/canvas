import React, { useReducer } from "react";
import { FaClock, FaLanguage } from "react-icons/fa";
import dynamic from "next/dynamic";

import MetaSEO from "@/common/components/MetaSEO";
import Button from "@/common/components/Button";
import Layout from "@/common/components/Layout";
import MediaSelect from "@/common/components/MediaSelect";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";
import HistoryBar from "@/common/components/HistoryBar";
import ComparisonTable from "@/common/components/ComparisonTable";
import FeedbackBox from "@/common/components/FeedbackBox";

import { TRANSLATE_COMPARISON } from "@/modules/translate/lib/constant";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";
import { premiumTranslateReducer } from "@/modules/premium/lib/reducer";
import { PREMIUM_TRANSLATE_STATES } from "@/modules/premium/lib/states";
import ReferralPromo from "@/common/components/ReferralPromo";
import PaypalBanner from "@/common/components/PaypalBanner";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const PremiumTranslate = () => {
  const [state, dispatch] = useReducer(
    premiumTranslateReducer,
    PREMIUM_TRANSLATE_STATES
  );
  const {
    originalText,
    showHistory,
    isImageTranslate,
    imageText,
    showLogin,
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
      {showLogin && <LoginModal isFree={false} />}
      <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-400 to-white pb-6">
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
              onChange={(option) =>
                updateState("isImageTranslate", option.value === "image")
              }
            />
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
            {isImageTranslate ? (
              <div className="mb-2">
                <ImageToTextUploader
                  titleColor="black"
                  dispatch={onImageTextDispatch}
                />
              </div>
            ) : (
              <PremiumTranslateForm
                originalText={originalText}
                imageText={imageText}
                onReuploadClick={() => updateState("isImageTranslate", true)}
                dispatchLoginForm={() => updateState("showLogin", true)}
                dispatchTranslateVal={(trans: string) =>
                  updateState("translateCompletion", trans)
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
      <div className="bg-white">
        <div className="container mx-auto p-2 lg:px-0">
          <PaypalBanner />
          <ReferralPromo />
          <div className="text-black mt-8">
            <div>How does Premium Checkbot Compared to the Original?</div>
            <ComparisonTable comparisons={TRANSLATE_COMPARISON} />
          </div>
          <div className="bg-black py-4 rounded">
            <FeedbackBox />
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default PremiumTranslate;
