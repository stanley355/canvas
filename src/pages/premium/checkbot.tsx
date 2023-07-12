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
// import Button from "@/common/components/Button";

const LoginModal = dynamic(
  () => import("../../modules/login/components/LoginModal")
);

const CheckBot = () => {
  // const queryClient = new QueryClient();

  const [states, dispatch] = useReducer(checkbotReducer, CHECKBOT_STATES);
  const {
    showLogin,
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
          <div
            className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8"
            id="checkbot_form"
          >
            <PremiumCheckBotForm
              sourceText={originalText}
              updateState={updateState}
            />
            <div>
              {checkbotCompletion &&
                checkbotAdded.length > 0 &&
                checkbotRemoved.length > 0 && (
                  <CheckbotResultToggle
                    resultFormat={resultFormat}
                    updateState={updateState}
                  />
                )}
              {!resultFormat && (
                <CheckboxResult checkbotVal={checkbotCompletion} />
              )}
              {resultFormat === "removed" && (
                <div
                  className="border border-gray-heckbotCompletion && (
                  <CheckbotResultToggle
                    resultFormat={resultFormat}
                    updateState={updateState}
                  />
                )}500 h-80 rounded-md p-2 overflow-y-scroll"
                >
                  {checkbotRemoved}
                </div>
              )}
              {resultFormat === "added" && (
                <div className="border border-gray-500 h-80 rounded-md p-2 overflow-y-scroll">
                  {checkbotAdded}
                </div>
              )}
              {resultFormat && (
                <div className="text-black">*Go to No Diff to copy</div>
              )}
            </div>
          </div>
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
