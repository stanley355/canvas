import React, { useState } from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");

  const isDesktop = useDesktopScreen();

  const seo = {
    title:
      "Upgrade Your Translation Game with LanguageAI - The Best Alternative to Google Translate",
    description:
      "Looking for an alternative to Google Translate? Look no further than LanguageAI - the intelligent translation tool that delivers superior accuracy and efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}translate/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto px-2">
        <h1 className="py-2 text-3xl" id="title">
          {isDesktop
            ? "LanguageAI Translate (with contextual features)"
            : "AI Translate (+Context)"}
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 mb-20">
          <TranslateForm dispatchTranslateVal={(val) => setTranslateVal(val)} />
          <TranslateResult translateVal={translateVal} />
        </div>
        <TranslateComparison />
      </div>
    </Layout>
  );
};

export default LangTranslate;
