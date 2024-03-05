import React from "react";
import dynamic from "next/dynamic";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";
import CheckbotPersonalInstructionInput from "./CheckbotPersonalInstructionInput";
import CheckbotTextInput from "./CheckbotTextInput";
import CheckbotResultBox from "./CheckbotResultBox";
import CheckbotResultToggleBtn from "./CheckbotResultToggleBtn";
import CheckbotRemovedAndAddedBox from "./CheckbotRemovedAndAddedBox";
import { useCheckbot } from "../lib/useCheckbot";
import { CheckbotResultFormatEnum } from "../lib/checkbotStates";
import HomeVideo from "@/modules/home/components/HomeVideo";


const CheckbotContainer = () => {
  const { checkbotStates } = useCheckbot();
  const {
    isPersonalInstruction,
    showLoginModal,
    showNoPlansModal,
    checkbotResultFormat,
  } = checkbotStates;

  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="px-2 mb-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-0">
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
      <div className="px-4 mt-12 lg:px-0">
        <HomeVideo />
        {/* <PlanList /> */}
      </div>
      {/* {showLoginModal && <LoginModal />} */}
    </div>
  );
};

export default CheckbotContainer;
