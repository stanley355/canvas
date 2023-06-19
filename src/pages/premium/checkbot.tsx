import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { FaPlusCircle } from "react-icons/fa";
import Layout from "@/common/components/Layout";
import PremiumCheckBotForm from "@/modules/premium/components/CheckbotForm";
import MetaSEO from "@/common/components/MetaSEO";
import PremiumCheckbotResult from "@/modules/premium/components/CheckbotResult";

const CheckBot = () => {
  const [checkbotVal, setCheckbotVal] = useState("");
  const [tokenUsed, setTokenUsed] = useState(0);

  const seo = {
    title: "Free Grammar Checker - LanguageAI Checkbot",
    description:
      "Grammar check for free! Copy and paste your text in grammar checker. Fix grammar, spelling, and punctuation errors instantly with our cutting-edge AI technology. No sign-up required!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}checkbot/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto p-2 lg:p-4 bg-white">
        <h1
          className="bg-black py-1 text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
          id="title"
        >
          <FaPlusCircle className="text-3xl mr-2" />
          <span>LanguageAI Premium</span>
        </h1>
        <h2 className="text-black mt-4 text-center text-lg mb-4 italic">
          #Ultimate Writing Check for All Languages
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
          <PremiumCheckBotForm
            dispatchCheckbotVal={setCheckbotVal}
            dispatchTokenUsed={setTokenUsed}
          />
          <PremiumCheckbotResult checkbotVal={checkbotVal} />
        </div>
        {tokenUsed && (
          <div className="text-lg text-black">
            Token used: {tokenUsed} tokens
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CheckBot;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  return {
    props: {},
  };
};
