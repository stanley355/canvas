import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import PremiumCheckBotForm from "@/modules/premium/components/CheckbotForm";
import PremiumCheckbotResult from "@/modules/premium/components/CheckbotResult";
import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import ComparisonTable from "@/common/components/ComparisonTable";
import { CHECKBOT_COMPARISON } from "@/modules/checkbot/constant";
import FeedbackBox from "@/common/components/FeedbackBox";

const CheckBot = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [checkbotVal, setCheckbotVal] = useState("");
  const [tokenUsed, setTokenUsed] = useState(0);

  const LoginModal = dynamic(
    () => import("../../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      {showLogin && <LoginModal isFree={false} />}
      <MetaSEO seo={PREMIUM_CHECKBOT_SEO} />
      <div className="bg-white">
        <div className="container mx-auto p-2 lg:px-2">
          <h1
            className="bg-black py-1 text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
            id="title"
          >
            <FaPlusCircle className="text-3xl mr-2" />
            <span>LanguageAI Premium</span>
          </h1>
          <h2 className="text-black mt-4 text-center text-lg mb-4 italic">
            #Ultimate Writing Check for All Languages
          </h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-2">
            <PremiumCheckBotForm
              dispatchLoginForm={() => setShowLogin(true)}
              dispatchCheckbotVal={setCheckbotVal}
            />
            <PremiumCheckbotResult checkbotVal={checkbotVal} />
          </div>
          <div className="text-black mb-4">
            <div>How does Premium Checkbot Compared to the Original?</div>
            <ComparisonTable comparisons={CHECKBOT_COMPARISON} />
          </div>
          <div className="bg-black py-4 rounded">
            <FeedbackBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckBot;
