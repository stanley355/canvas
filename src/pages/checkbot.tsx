import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
import MetaSEO from "@/common/components/MetaSEO";
import { CHECKBOT_SEO } from "@/modules/checkbot/lib/constant";
import FeedbackBox from "@/common/components/FeedbackBox";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const LoginModal = dynamic(
    () => import("../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      <MetaSEO seo={CHECKBOT_SEO} />
      <div className="lg:container mx-auto px-2 lg:px-0" id="title">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>AI Checkbot</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          <CheckBotForm
            dispatchLoginForm={() => setShowLogin(true)}
            dispatchCheckbotVal={(val: string) => setCheckbotVal(val)}
          />
          <CheckboxResult checkbotVal={checkbotVal} />
        </div>
        <CheckbotComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default CheckBot;
