import React, { useReducer, useState } from "react";
import { FaRobot } from "react-icons/fa";
import dynamic from "next/dynamic";
import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import PremiumCheckBotForm from "@/modules/premium/components/CheckbotForm";
import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import ComparisonTable from "@/common/components/ComparisonTable";
import { CHECKBOT_COMPARISON } from "@/modules/checkbot/lib/constant";
import FeedbackBox from "@/common/components/FeedbackBox";
import CheckbotResultToggle from "@/modules/checkbot/components/CheckbotResultToggle";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";
import { checkbotReducer } from "@/modules/checkbot/lib/reducer";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const CheckBot = () => {
  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const { showLogin, resultFormat, checkbotCompletion, checkbotRemoved, checkbotAdded } = states;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  return (
    <Layout>
      {showLogin && <LoginModal isFree={false} />}
      <MetaSEO seo={PREMIUM_CHECKBOT_SEO} />
      <div className="bg-white">
        <div className="container mx-auto p-2 lg:px-2">
          <h1
            className="text-black my-4 text-3xl rounded flex items-center justify-center font-semibold lg:w-1/3 lg:mx-auto"
            id="title"
          >
            <FaRobot className="text-3xl mr-2" />
            <span>Checkbot+</span>
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-16" id="checkbot_form">
            <PremiumCheckBotForm updateState={updateState} />
            <div >
              {checkbotCompletion && <CheckbotResultToggle
                resultFormat={resultFormat}
                updateState={updateState}
              />}
              {!resultFormat && <CheckboxResult checkbotVal={checkbotCompletion} />}
              {resultFormat === "removed" &&  <div className="border border-gray-500 h-80 rounded-md p-2 overflow-y-scroll">{checkbotRemoved}</div> }
              {resultFormat === "added" &&  <div className="border border-gray-500 h-80 rounded-md p-2 overflow-y-scroll">{checkbotAdded}</div> }

              {resultFormat && <div className="text-black">*Go To No Diff to copy</div> }
            </div>
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
