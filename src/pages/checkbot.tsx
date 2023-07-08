import React, { useReducer, useState } from "react";
import dynamic from "next/dynamic";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
import MetaSEO from "@/common/components/MetaSEO";
import { CHECKBOT_SEO } from "@/modules/checkbot/lib/constant";
import FeedbackBox from "@/common/components/FeedbackBox";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";
import { checkbotReducer } from "@/modules/checkbot/lib/reducer";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const CheckBot = () => {
  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const { showLogin, checkbotCompletion } = states;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  return (
    <Layout>
      <MetaSEO seo={CHECKBOT_SEO} />
      <div className="lg:container mx-auto px-2 lg:px-0" id="top">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>AI Checkbot</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
          <CheckBotForm
            dispatchLoginForm={() => updateState("showLogin", true)}
            dispatchCheckbotVal={(val: string) => updateState("checkbotCompletion", val)}
          />
          <CheckboxResult checkbotVal={checkbotCompletion} />
        </div>
        <CheckbotComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default CheckBot;
