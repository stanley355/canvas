import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import TranslateReview from "@/modules/translate/components/TranslateReview";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");

  const isDesktop = useDesktopScreen();

  const seo = {
    title: "5x better than Google Translate - LanguageAI Translate",
    description:
      "Looking for an alternative to Google Translate? Look no further than LanguageAI - the intelligent translation tool that delivers superior accuracy and efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}translate/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto px-2">
        <h1
          className="py-2 text-3xl flex flex-row items-center justify-center lg:my-4"
          id="title"
        >
          <FaLanguage className="text-5xl mr-2" />
          <span>
            {isDesktop
              ? "LanguageAI Translate (with Contextual Feature)"
              : "AI Translate"}
          </span>
        </h1>
        <h2 className="text-center text-lg mb-4">
          Try and Compare with Google Translate
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 mb-8">
          <TranslateForm dispatchTranslateVal={(val) => setTranslateVal(val)} />
          <TranslateResult translateVal={translateVal} />
        </div>
        <TranslateReview />
        <TranslateComparison />
      </div>
    </Layout>
  );
};

export default LangTranslate;
