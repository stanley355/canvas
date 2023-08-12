import React, { useReducer } from "react";
import { FaClock, FaRobot } from "react-icons/fa";
import dynamic from "next/dynamic";

import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import Button from "@/common/components/Button";
import PremiumCheckbotArea from "@/modules/premium/components/PremiumCheckbotArea";
import HistoryBar from "@/common/components/HistoryBar";

import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";
import { checkbotReducer } from "@/modules/checkbot/lib/reducer";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { PlansSection } from "../plans";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const NoPlansModal = dynamic(
  () => import("../../modules/premium/components/NoPlansModal")
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
      {showLogin && <LoginModal />}
      {showBalanceModal && <NoPlansModal />}
      <MetaSEO seo={PREMIUM_CHECKBOT_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-400 to-white pb-6">
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
            wrapperClassName="p-2 w-fit bg-blue-900 rounded-md mx-auto cursor-pointer mb-8"
            buttonClassName="w-full flex items-center gap-2 h-full"
            onClick={() => {
              sendFirebaseEvent("show_history", {});
              updateState("showHistory", !showHistory);
            }}
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
        </div>
      </div>
      <div className="bg-white">
        <PlansSection />
      </div>
    </Layout>
  );
};

export default CheckBot;
