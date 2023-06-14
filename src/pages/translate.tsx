import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import SocialShare from "@/common/components/SocialShare";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const isDesktop = useDesktopScreen();

  const seo = {
    title:
      "LanguageAI Translate - The Best Translation App for All Languages | Contextual Translation",
    description:
      "LanguageAI Translate is the top translation app for all languages in the world. Our app provides contextual translation, making it 10x better than Google Translate. Try LanguageAI Translate today for more accurate, reliable, and contextual translations.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}translate/`,
  };

  const LoginModal = dynamic(
    () => import("../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto px-2">
        <h1
          className="py-2 text-2xl lg:text-4xl flex flex-row items-center justify-center lg:my-4"
          id="title"
        >
          <FaLanguage className="text-5xl mr-2" />
          <span> LanguageAI Translate</span>
        </h1>
        <h2 className="text-center text-lg mb-4">
          #1 Translation App for All Languages
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
          <TranslateForm
            dispatchLoginForm={() => setShowLogin(true)}
            dispatchTranslateVal={(val) => setTranslateVal(val)}
          />
          <TranslateResult translateVal={translateVal} />
        </div>
        <SocialShare url={`${process.env.NEXT_PUBLIC_BASE_URL}translate/`} />
        <TranslateComparison />
      </div>
      {showLogin && <LoginModal />}
    </Layout>
  );
};

export default LangTranslate;
