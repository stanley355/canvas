import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import dynamic from "next/dynamic";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import PremiumTranslateResult from "@/modules/premium/components/TranslateResult";
import GoogleTranslateResult from "@/modules/premium/components/GoogleTranslateResult";
import { PREMIUM_TRANSLATE_SEO } from "@/modules/premium/lib/constant";

const PremiumTranslate = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [langTranslate, setLangTranslate] = useState("");
  const [googleTranslate, setGoogleTranslate] = useState("");
  const [tokenUsed, setTokenUsed] = useState(0);

  const LoginModal = dynamic(
    () => import("../../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      <MetaSEO seo={PREMIUM_TRANSLATE_SEO} />
      {showLogin && <LoginModal />}
      <div className="bg-white">

        <div className="container mx-auto p-2 lg:px-0">
          <h1
            className="bg-black py-1 text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
            id="title"
          >
            <FaPlusSquare className="text-3xl mr-2" />
            <span>LanguageAI Premium</span>
          </h1>
          <h2 className="text-black mt-4 text-center text-lg mb-4 italic">
            #Translation updated with real time data
          </h2>
          <div className="lg:grid lg:grid-cols-3 lg:gap-4 mb-2">
            <PremiumTranslateForm
              dispatchLoginForm={() => setShowLogin(true)}
              dispatchLangTranslate={setLangTranslate}
              dispatchGoogleTranslate={setGoogleTranslate}
              dispatchTokenUsed={setTokenUsed}
            />
            <PremiumTranslateResult translateVal={langTranslate} />
            <GoogleTranslateResult translateVal={googleTranslate} />
          </div>
          {tokenUsed && (
            <div className="text-lg text-black">
              Token used: {tokenUsed} tokens
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;