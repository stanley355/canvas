import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import FeedbackBox from "@/common/components/FeedbackBox";
import { TRANSLATE_SEO } from "@/modules/translate/constant";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const LoginModal = dynamic(
    () => import("../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      <MetaSEO seo={TRANSLATE_SEO} />
      <div className="lg:w-3/4 mx-auto px-2 lg:px-0">
        <h1
          className="py-2 text-2xl lg:text-4xl flex items-center justify-center lg:my-4"
          id="title"
        >
          <FaLanguage className="text-5xl mr-2" />
          <span>AI Translate</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          <TranslateForm
            dispatchLoginForm={() => setShowLogin(true)}
            dispatchTranslateVal={(val) => setTranslateVal(val)}
          />
          <TranslateResult translateVal={translateVal} />
        </div>
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal />}
    </Layout>
  );
};

export default LangTranslate;
