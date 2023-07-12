import React, { useReducer } from "react";
import { FaClock, FaRobot } from "react-icons/fa";
import dynamic from "next/dynamic";

import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import Button from "@/common/components/Button";
import PremiumCheckbotArea from "@/modules/premium/components/PremiumCheckbotArea";
import ComparisonTable from "@/common/components/ComparisonTable";
import FeedbackBox from "@/common/components/FeedbackBox";
import HistoryBar from "@/common/components/HistoryBar";

import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import { CHECKBOT_COMPARISON } from "@/modules/checkbot/lib/constant";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";
import { checkbotReducer } from "@/modules/checkbot/lib/reducer";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const InsufficientBalanceModal = dynamic(
  () => import("../../modules/premium/components/InsufficientBalanceModal")
);

const CheckBot = () => {
  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const { showLogin, showBalanceModal, showHistory } = states;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  const handleHistoryClick = (history: any) => {
    updateState("originalText", history.originalText);
    updateState("checkbotCompletion", history.completionText);
    updateState("showHistory", false);
  };

  return (
    <Layout>
      {showLogin && <LoginModal isFree={false} />}
      {showBalanceModal && (
        <InsufficientBalanceModal
          onCloseClick={() => updateState("showBalanceModal", false)}
        />
      )}
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
          <PremiumCheckbotArea states={states} updateState={updateState} />
          <Button
            type="button"
            wrapperClassName="p-2 w-fit bg-blue-900 rounded-md mx-auto cursor-pointer"
            buttonClassName="w-full flex items-center gap-2 h-full"
            onClick={() => updateState("showHistory", !showHistory)}
          >
            <FaClock />
            <span>Show History</span>
          </Button>
          {showHistory && (
            <HistoryBar
              pageType="checkbot"
              onHistoryClick={handleHistoryClick}
              onCloseClick={() => updateState("showHistory", false)}
            />
          )}

          <div className="text-black mb-4 mt-8">
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
