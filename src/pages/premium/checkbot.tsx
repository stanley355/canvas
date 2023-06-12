import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import PremiumCheckBotForm from "@/modules/premium/components/CheckbotForm";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";
import MetaSEO from "@/common/components/MetaSEO";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const seo = {
    title: "Free Grammar Checker - LanguageAI Checkbot",
    description:
      "Grammar check for free! Copy and paste your text in grammar checker. Fix grammar, spelling, and punctuation errors instantly with our cutting-edge AI technology. No sign-up required!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}checkbot/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto p-2 lg:p-4 bg-white">
        <h1
          className="bg-black py-1 text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
          id="title"
        >
          <FaPlusCircle className="text-3xl mr-2" />
          <span>
            LanguageAI Premium
          </span>
        </h1>
        <h2 className="text-black mt-4 text-center text-lg mb-4 italic">
          #Ultimate Writing Check for All Languages
        </h2>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 mb-8">
          <PremiumCheckBotForm
            dispatchLoginForm={() => {}}
            dispatchCheckbotVal={(val) => { }}
          />
        </div>
        <div className="text-black">
          <CheckbotComparison />
        </div>
      </div>
    </Layout>
  );
};

export default CheckBot;
