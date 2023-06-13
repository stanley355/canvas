import React, { useState } from "react";
import { FaLanguage, FaPlusSquare } from "react-icons/fa";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import PremiumTranslateResult from "@/modules/premium/components/TranslateResult";
import GoogleTranslateResult from "@/modules/premium/components/GoogleTranslateResult";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";

const PremiumTranslate = () => {
  const [langTranslate, setLangTranslate] = useState("");
  const [googleTranslate, setGoogleTranslate] = useState("");
  const [tokenUsed, setTokenUsed] = useState(0);

  const seo = {
    title:
      "LanguageAI Translate - The Best Translation App for All Languages | Contextual Translation",
    description:
      "LanguageAI Translate is the top translation app for all languages in the world. Our app provides contextual translation, making it 10x better than Google Translate. Try LanguageAI Translate today for more accurate, reliable, and contextual translations.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}translate/`,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto p-2 lg:p-4 bg-white">
        <h1
          className="bg-black py-1 text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
          id="title"
        >
          <FaPlusSquare className="text-3xl mr-2" />
          <span>LanguageAI Premium</span>
        </h1>
        <h2 className="text-black mt-4 text-center text-lg mb-4 italic">
          #Translation updated with real time data
        </h2>
        <div className="lg:grid lg:grid-cols-3 lg:gap-2 mb-4">
          <PremiumTranslateForm
            dispatchLangTranslate={setLangTranslate}
            dispatchGoogleTranslate={setGoogleTranslate}
            dispatchTokenUsed={setTokenUsed}
          />
          <PremiumTranslateResult translateVal={langTranslate} />
          <GoogleTranslateResult translateVal={googleTranslate} />
        </div>
        {tokenUsed && (
          <div className="text-lg text-black">
            Token used: {tokenUsed} tokens
          </div>
        )}
        <div className="text-black">
          <TranslateComparison />
        </div>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;
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
