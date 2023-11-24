import React from "react";
import CheckbotHeader from "./CheckbotHeader";
import CheckbotInstructionDropdown from "./CheckbotInstructionDropdown";

const CheckbotContainer = () => {
  return (
    <div className="container mx-auto">
      <CheckbotHeader />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 px-2 lg:px-0">
        <CheckbotInstructionDropdown />
      </div>
    </div>
  );
};

export default CheckbotContainer;
