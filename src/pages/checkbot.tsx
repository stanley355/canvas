import React, {useState} from "react";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-2">
        <h1 className="flex flex-row items-center text-xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>LanguageAI Checkbot</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2">

        <CheckBotForm dispatchCheckbotVal={(val: string) => setCheckbotVal(val)} />
        <CheckboxResult checkbotVal={checkbotVal} />
        </div>
      </div>
    </Layout>
  );
};

export default CheckBot;
