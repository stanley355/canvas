import React from "react";
import { FaRobot } from "react-icons/fa6";

const CheckbotHeader = () => {
  return (
    <h1
      className="text-xl font-semibold rounded flex items-center justify-center my-4"
      id="title"
    >
      <FaRobot className="text-4xl mr-2" />
      <span>AI Checkbot</span>
    </h1>
  );
};

export default CheckbotHeader;
