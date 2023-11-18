import React, { useReducer } from "react";
import { FaClock, FaLanguage } from "react-icons/fa";
import dynamic from "next/dynamic";

import MetaSEO from "@/common/components/MetaSEO";
import Button from "@/common/components/Button";
import MediaSelect from "@/common/components/MediaSelect";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import TranslateResult from "@/modules/premium/components/TranslateResult";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";
import HistoryBar from "@/common/components/HistoryBar";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";
import { premiumTranslateReducer } from "@/modules/premium/lib/reducer";
import { PREMIUM_TRANSLATE_STATES } from "@/modules/premium/lib/states";
import { PlansSection } from "./plans";
import TranslateProvider from "@/modules/translate/components/TranslateProvider";
import TranslateTypeDropdown from "@/modules/translate/components/TranslateTypeDropdown";
import TranslateHeader from "@/modules/translate/components/TranslateHeader";

const LoginModal = dynamic(
  () => import("@/modules/login/components/LoginModal")
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
    <TranslateProvider>
      <div>
        {showLogin && <LoginModal />}
        <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
        <div className="bg-gradient-to-b from-white via-slate-400 to-white">
          <div className="container mx-auto">
            <TranslateHeader />
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
          <PlansSection />
        </div>
      </div>
    </TranslateProvider>
  );
};

export default PremiumTranslate;
