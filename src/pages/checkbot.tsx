import React, { useReducer } from "react";
import dynamic from "next/dynamic";
import { FaClock, FaRobot } from "react-icons/fa";

import Button from "@/common/components/Button";
import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import HistoryBar from "@/common/components/HistoryBar";
import FeedbackBox from "@/common/components/FeedbackBox";
import CheckbotArea from "@/modules/checkbot/components/CheckbotArea";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";

import { checkbotReducer } from "@/modules/checkbot/lib/reducer";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";
import { CHECKBOT_SEO } from "@/modules/checkbot/lib/constant";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const LoginModal = dynamic(
  () => import("../modules/login/components/LoginModal")
);

const CheckBot = () => {
  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const { showLogin, showHistory } = states;

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
      <MetaSEO seo={CHECKBOT_SEO} />
      <div className="lg:container mx-auto px-2 lg:px-0">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>AI Checkbot</span>
        </h1>
        <CheckbotArea states={states} updateState={updateState} />
        <Button
          type="button"
          wrapperClassName="p-2 w-fit bg-blue-900 rounded-md mx-auto cursor-pointer"
          buttonClassName="w-full flex items-center gap-2 h-full"
          onClick={() => {
            sendFirebaseEvent("show_history", {});
            updateState("showHistory", !showHistory)
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
        <CheckbotComparison />
        <FeedbackBox />
      </div>
      {showLogin && <LoginModal isFree />}
    </Layout>
  );
};

export default CheckBot;
