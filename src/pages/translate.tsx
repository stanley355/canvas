import React, { useState } from "react";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");

  const isDesktop = useDesktopScreen();

  return (
    <Layout>
      <div className="container mx-auto px-2">
        <h1 className="py-2 text-3xl" id="title">
          {isDesktop
            ? "LangAI Translate (with contextual features)"
            : "AI Translate (+Context)"}
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:my-4">
          <TranslateForm dispatchTranslateVal={(val) => setTranslateVal(val)} />
          <TranslateResult translateVal={translateVal} />
        </div>
        <TranslateComparison />
      </div>
    </Layout>
  );
};

export default LangTranslate;
