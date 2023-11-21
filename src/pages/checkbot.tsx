import React, { useReducer } from "react";
import MetaSEO from "@/common/components/MetaSEO";
import { PREMIUM_CHECKBOT_SEO } from "@/modules/premium/lib/constant";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";
import CheckbotContainer from "@/modules/checkbot/components/CheckbotContainer";

const CheckBot = () => {
  return (
    <CheckbotProvider>
      <MetaSEO seo={PREMIUM_CHECKBOT_SEO} />
      <div className="bg-gradient-to-b from-white via-slate-400 to-white">
        <CheckbotContainer />
      </div>
    </CheckbotProvider>
    // <div>
    //   {showLogin && <LoginModal />}
    //   {showBalanceModal && <NoPlansModal />}
    //   <div className="bg-gradient-to-b from-white via-slate-400 to-white pb-6">
    //     <div className="container mx-auto p-2 lg:px-2">
    //       <h1
    //         className="text-black my-4 text-3xl rounded flex items-center justify-center font-semibold lg:w-1/3 lg:mx-auto"
    //         id="title"
    //       >
    //         <FaRobot className="text-3xl mr-2" />
    //         <span>AI Checkbot</span>
    //       </h1>
    //       <PremiumCheckbotArea states={states} updateState={updateState} />
    //       <Button
    //         type="button"
    //         wrapperClassName="p-2 w-fit bg-blue-900 text-white rounded-md mx-auto cursor-pointer mb-8"
    //         buttonClassName="w-full flex items-center gap-2 h-full"
    //         onClick={() => {
    //           sendFirebaseEvent("show_history", {});
    //           updateState("showHistory", !showHistory);
    //         }}
    //       >
    //         <FaClock />
    //         <span>Show History</span>
    //       </Button>
    //       {showHistory && (
    //         <HistoryBar
    //           pageType="checkbot"
    //           onHistoryClick={handleHistoryClick}
    //           onCloseClick={() => updateState("showHistory", false)}
    //         />
    //       )}
    //     </div>
    //   </div>
    //   <div className="bg-white">
    //     <PlansSection />
    //   </div>
    // </div>
  );
};

export default CheckBot;
