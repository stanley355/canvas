import React from "react";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";
import { useCheckbot } from "../lib/useCheckbot";
import CheckbotPersonalInstructionInput from "./CheckbotPersonalInstructionInput";

const CheckbotContainer = () => {
  const { checkbotStates } = useCheckbot();
  const { isPersonalInstruction } = checkbotStates;
  console.log(checkbotStates)
  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 px-2 lg:px-0">
        <CheckbotInstructionDropdown />
        {isPersonalInstruction && <CheckbotPersonalInstructionInput />}
      </div>
    </div>
  );
};

export default CheckbotContainer;
