import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeServices from "@/modules/home/components/HomeServices";
import HomeFeaturedIn from "@/modules/home/components/HomeFeaturedIn";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";
import LoginForm from "@/modules/login/components/LoginForm";

const Home = () => {
  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <HomeHero />
      <div className="container mx-auto">
        <HomeServices />
        <HomeFeaturedIn />
        <HomeStatistic />
        <div className="py-4">

        <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
