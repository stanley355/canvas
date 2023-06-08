import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import PremiumTranslateForm from "@/modules/premium/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";
import SocialShare from "@/common/components/SocialShare";

const PremiumTranslate = () => { 
  const [translateVal, setTranslateVal] = useState("");

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
      <div className="container mx-auto p-2 bg-white">
        <h1
          className="bg-black text-3xl rounded flex flex-row items-center justify-center mt-2 lg:my-4 lg:w-1/3 lg:mx-auto"
          id="title"
        >
          <FaLanguage className="text-5xl mr-2" />
          <span>
            LanguageAI Premium
          </span>
        </h1>
        <h2 className="text-black mt-4 text-center text-lg mb-4">
          #1 Translation App for All Languages
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
          <PremiumTranslateForm
            dispatchLoginForm={() => {}}
            dispatchTranslateVal={(val) => setTranslateVal(val)}
          />
          <TranslateResult translateVal={translateVal} />
        </div>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;
