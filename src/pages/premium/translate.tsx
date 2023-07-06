import React, { useState } from "react";
import { FaLanguage, FaPlusSquare } from "react-icons/fa";
import dynamic from "next/dynamic";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import PremiumTranslateResult from "@/modules/premium/components/TranslateResult";
import ComparisonTable from "@/common/components/ComparisonTable";
import FeedbackBox from "@/common/components/FeedbackBox";
import { TRANSLATE_COMPARISON } from "@/modules/translate/constant";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";

const PremiumTranslate = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [langTranslate, setLangTranslate] = useState("");
  const [tokenUsed, setTokenUsed] = useState(0);

  const LoginModal = dynamic(
    () => import("../../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      {showLogin && <LoginModal isFree={false} />}
      <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
      <div className="bg-white">
        <div className="container mx-auto p-2 lg:px-0">
          <h1
            className="text-black text-3xl rounded flex items-center justify-center my-4 lg:w-1/3 lg:mx-auto"
            id="title"
          >
            <FaLanguage className="text-5xl mr-2" />
            <span>Premium Translate</span>
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-2">
            <PremiumTranslateForm
              dispatchLoginForm={() => setShowLogin(true)}
              dispatchLangTranslate={setLangTranslate}
              dispatchTokenUsed={setTokenUsed}
            />
            <PremiumTranslateResult translateVal={langTranslate} />
          </div>
          {tokenUsed && (
            <div className="text-lg text-black">
              Token used: {tokenUsed} tokens
            </div>
          )}
          <div className="text-black mb-4">
            <div>How does Premium Checkbot Compared to the Original?</div>
            <ComparisonTable comparisons={TRANSLATE_COMPARISON} />
          </div>
          <div className="bg-black py-4 rounded">
            <FeedbackBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;