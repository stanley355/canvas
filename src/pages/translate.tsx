import React, { useState, useEffect, useReducer } from "react";
import dynamic from "next/dynamic";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import FeedbackBox from "@/common/components/FeedbackBox";
import { TRANSLATE_SEO } from "@/modules/translate/lib/constant";
import MediaSelect from "@/common/components/MediaSelect";
import ImageToTextUploader from "@/common/components/ImageToTextUploader";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import NewsModal from "@/common/components/NewsModal";
import Cookies from "js-cookie";
import { translateReducer } from "@/modules/translate/lib/reducer";
import { TRANSLATE_STATES } from "@/modules/translate/lib/states";

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const LangTranslate = () => {
  const [state, dispatch] = useReducer(translateReducer, TRANSLATE_STATES);
  const {
    showNews,
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

  useEffect(() => {
    const showCookie = Cookies.get("showNews");

    if (!showCookie) {
      updateState("showNews", true);
      Cookies.set("showNews", "false", { expires: 1 });
      return;
    }
  }, [showNews]);

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      {showNews && (
        <NewsModal onCloseClick={() => updateState("showNews", false)} />
      )}
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
            style="white"
            onChange={(opt) =>
              updateState("isImageTranslate", opt.value === "image")
            }
          />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          {isImageTranslate ? (
            <ImageToTextUploader style="white" dispatch={onImageTextDispatch} />
          ) : (
            <TranslateForm
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
        <TranslateComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default LangTranslate;
