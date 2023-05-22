import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaRobot } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import CheckBotForm from "@/modules/checkbot/components/CheckbotForm";
import CheckboxResult from "@/modules/checkbot/components/CheckbotResult";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";
import SocialShare from "@/common/components/SocialShare";
import MetaSEO from "@/common/components/MetaSEO";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const seo = {
    title: "LanguageAI Checkbot - The Ultimate Grammar and Spelling Checker",
    description:
      "LanguageAI Checkbot is the ultimate grammar and spelling checker that checks your writing in All Languages. 10x better than Grammarly. Try it now for free!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}checkbot/`,
  };

  const LoginModal = dynamic(
    () => import("../modules/login/components/LoginModal")
  );

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto px-2" id="title">
        <h1 className="flex flex-row items-center text-2xl lg:text-4xl justify-center my-4">
          <FaRobot className="text-3xl mr-2" />
          <span>LanguageAI Checkbot</span>
        </h1>
        <h2 className="text-center text-lg mb-4">
          ANNOUNCEMENT: Starting from 27 May 2023, for better support, we will
          move our domain to{" "}
          <a
            href="https://languageai.world/"
            className="underline hover:text-blue-200"
          >
            https://languageai.world/
          </a>
        </h2>
        {/* <h2 className="text-lg lg:text-xl text-center mb-4">
          The Ultimate Grammar and Spelling Checker for All Languages
        </h2> */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 mb-8">
          <CheckBotForm
            dispatchLoginForm={() => setShowLogin(true)}
            dispatchCheckbotVal={(val: string) => setCheckbotVal(val)}
          />
          <CheckboxResult checkbotVal={checkbotVal} />
        </div>
        <SocialShare url={`${process.env.NEXT_PUBLIC_BASE_URL}checkbot/`} />
        <CheckbotComparison />
      </div>
      {showLogin && <LoginModal />}
    </Layout>
  );
};

export default CheckBot;
