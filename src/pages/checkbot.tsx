import React from "react";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";


const CheckBot = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
        <h1 className="flex flex-row items-center text-xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>LanguageAI Checkbot</span>
        </h1>
        <CheckBotForm />
      </div>
    </Layout>
  );
};

export default CheckBot;
