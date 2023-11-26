import React from "react";
import dynamic from "next/dynamic";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";
import CheckbotPersonalInstructionInput from "./CheckbotPersonalInstructionInput";
import CheckbotTextInput from "./CheckbotTextInput";
import CheckbotResultBox from "./CheckbotResultBox";
import CheckbotResultToggleBtn from "./CheckbotResultToggleBtn";
import CheckbotRemovedAndAddedBox from "./CheckbotRemovedAndAddedBox";
import PlanOptions from "@/modules/plans/components/PlanOptions";
import { useCheckbot } from "../lib/useCheckbot";
import { CheckbotResultFormatEnum } from "../lib/checkbotStates";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"));
const NoPlansModal = dynamic(
  () => import("../../plans/components/NoPlansModal")
);

const CheckbotContainer = () => {
  const { checkbotStates } = useCheckbot();
  const {
    isPersonalInstruction,
    showLoginModal,
    showNoPlansModal,
    checkbotResultFormat,
  } = checkbotStates;

  // TODO: showHistory and show no plan
  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 px-2 lg:px-0">
        <div className="mb-4 lg:mb-0">
          <CheckbotInstructionDropdown />
          {isPersonalInstruction && <CheckbotPersonalInstructionInput />}
          <CheckbotTextInput />
        </div>
        <div>
          <CheckbotResultToggleBtn />
          {checkbotResultFormat === CheckbotResultFormatEnum.NoDiff ? (
            <CheckbotResultBox />
          ) : (
            <CheckbotRemovedAndAddedBox />
          )}
        </div>
      </div>
      <PlanOptions />
      {showLoginModal && <LoginModal />}
      {showNoPlansModal && <NoPlansModal />}
    </div>
  );
};

export default CheckbotContainer;
