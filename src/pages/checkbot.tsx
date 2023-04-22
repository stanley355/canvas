import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";
import MetaSEO from "@/common/components/MetaSEO";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");

  const seo = {
    title: "10x better than Grammarly - LanguageAI Checkbot",
    description:
      "Looking for an alternative to Grammary? Look no further than LanguageAI - the intelligent grammar and spelling check that delivers superior accuracy and efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}checkbot/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto px-2" id="title">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>LanguageAI Checkbot</span>
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 mb-20">
          <CheckBotForm
            dispatchCheckbotVal={(val: string) => setCheckbotVal(val)}
          />
          <CheckboxResult checkbotVal={checkbotVal} />
        </div>

        <CheckbotComparison />
      </div>
    </Layout>
  );
};

export default CheckBot;
