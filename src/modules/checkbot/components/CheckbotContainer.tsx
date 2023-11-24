import React from "react";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";
import { useCheckbot } from "../lib/useCheckbot";
import CheckbotPersonalInstructionInput from "./CheckbotPersonalInstructionInput";
import CheckbotTextInput from "./CheckbotTextInput";

const CheckbotContainer = () => {
  const { checkbotStates } = useCheckbot();
  const { isPersonalInstruction } = checkbotStates;

  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 px-2 lg:px-0">
        <div>
          <CheckbotInstructionDropdown />
          {isPersonalInstruction && <CheckbotPersonalInstructionInput />}
          <CheckbotTextInput />
        </div>
      </div>
    </div>
  );
};

export default CheckbotContainer;
