import React from "react";
import { GetStaticProps } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import HomeHero from "@/modules/home/HomeHero";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import HomeCopywriting from "@/modules/home/HomeCopywriting";
import PackageJSON from "../../package.json";
import CheckbotComparison from "@/modules/checkbot/components/CheckbotComparison";

const Home = () => {
  const seo = {
    title: "LanguageAI - The most advanced language and text processing system",
    description:
      "LanguageAI - The cutting-edge language and words processing system that's replacing Gooogle Translate. Discover how our advanced technology is revolutionizing language analysis today.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  const HomeTitle = () => (
    <div className="p-4 lg:py-8 border-b">
      <h3 className="text-3xl">Introducing LanguageAI {PackageJSON.version}</h3>
      <div className="text-lg">
        The most advanced language and text processing system
      </div>
    </div>
  );

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <HomeHero />
      <div className="container mx-auto">
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
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
