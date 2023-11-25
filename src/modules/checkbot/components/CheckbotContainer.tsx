import React from "react";
import dynamic from "next/dynamic";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";
import CheckbotPersonalInstructionInput from "./CheckbotPersonalInstructionInput";
import CheckbotTextInput from "./CheckbotTextInput";
import { useCheckbot } from "../lib/useCheckbot";
import CheckbotResultBox from "./CheckbotResultBox";
import CheckbotResultToggleBtn from "./CheckbotResultToggleBtn";

const LoginModal = dynamic(() => import("../../login/components/LoginModal"));
const NoPlansModal = dynamic(
  () => import("../../premium/components/NoPlansModal")
);

const CheckbotContainer = () => {
  const { checkbotStates } = useCheckbot();
  const { isPersonalInstruction, showLoginModal, showNoPlansModal } =
    checkbotStates;

  // TODO: showHistory and show no plan
  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 px-2 lg:px-0">
        <div>
          <CheckbotInstructionDropdown />
          {isPersonalInstruction && <CheckbotPersonalInstructionInput />}
          <CheckbotTextInput />
        </div>
        <div>
          <CheckbotResultToggleBtn />
          <CheckbotResultBox />
        </div>
      </div>
      {showLoginModal && <LoginModal />}
      {showNoPlansModal && <NoPlansModal />}
    </div>
  );
};

export default CheckbotContainer;
