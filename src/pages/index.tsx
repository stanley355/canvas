import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import HomeCopywriting from "@/modules/home/HomeCopywriting";
import PackageJSON from "../../package.json";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";

const Home = () => {
  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  const HomeTitle = () => (
    <div className="p-4 border-b">
      <h1 className="text-3xl">Introducing LanguageAI {PackageJSON.version}</h1>
      <div className="text-lg">
        10x Better Writing Check and Translation for All Languages
      </div>
    </div>
  );

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto">
        <h2 className="text-center text-2xl py-4 border-b">
          ANNOUNCEMENT: Starting from 27 May 2023, for better support, we will
          move our domain to{" "}
          <a
            href="https://languageai.world/"
            className="underline hover:text-blue-200"
          >
            https://languageai.world/
          </a>
        </h2>
        <HomeTitle />
        <HomeCopywriting />
        <div className="px-2 mb-8 flex flex-col items-center justify-center">
          <TranslateComparison />
          <div className="my-16">
            <Button
              type="link"
              title="Let's translate"
              href="/translate/"
              buttonClassName="p-2 bg-white border mx-auto text-black hover:bg-black hover:text-white text-xl font-semibold"
            />
          </div>
        </div>
        <div className="px-2 mb-8 flex flex-col items-center justify-center">
          <CheckbotComparison />
          <div className="my-16">
            <Button
              type="link"
              title="Let's check my writing"
              href="/checkbot/"
              buttonClassName="p-2 bg-white border mx-auto text-black hover:bg-black hover:text-white text-xl font-semibold"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
