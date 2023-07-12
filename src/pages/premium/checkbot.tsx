import React, { useReducer } from "react";
import { FaClock, FaRobot } from "react-icons/fa";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/common/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";
import ComparisonTable from "@/common/components/ComparisonTable";
import FeedbackBox from "@/common/components/FeedbackBox";
import CheckbotResultToggle from "@/modules/checkbot/components/CheckbotResultToggle";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
// import HistoryBar from "@/common/components/HistoryBar";
import PremiumCheckBotForm from "@/modules/premium/components/CheckbotForm";

import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import { CHECKBOT_COMPARISON } from "@/modules/checkbot/lib/constant";
import { CHECKBOT_STATES } from "@/modules/checkbot/lib/states";
import { checkbotReducer } from "@/modules/checkbot/lib/reducer";
import PremiumCheckbotArea from "@/modules/premium/components/PremiumCheckbotArea";
// import Button from "@/common/components/Button";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const InsufficientBalanceModal = dynamic(
  () => import("../../modules/premium/components/InsufficientBalanceModal")
);

const CheckBot = () => {
  // const queryClient = new QueryClient();

  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const {
    showLogin,
    showBalanceModal,
    showHistory,
    originalText,
    resultFormat,
    checkbotCompletion,
    checkbotRemoved,
    checkbotAdded,
  } = states;

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
      {showBalanceModal && <InsufficientBalanceModal onCloseClick={() => updateState("showBalanceModal", false)} />  }
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
          {/* <Button
            type="button"
            wrapperClassName="p-2 w-fit bg-blue-900 rounded-md mx-auto cursor-pointer"
            buttonClassName="w-full flex items-center gap-2 h-full"
            onClick={() => updateState("showHistory", !showHistory)}
          >
            <FaClock />
            <span>Show History</span>
          </Button>
          {showHistory && (
            <QueryClientProvider client={queryClient}>
              <HistoryBar
                pageType="checkbot"
                onHistoryClick={handleHistoryClick}
                onCloseClick={() => updateState("showHistory", false)}
              />
            </QueryClientProvider>
          )} */}

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
